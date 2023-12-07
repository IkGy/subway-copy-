import React, { useState, useRef, useEffect } from 'react';
import './faq.css';
import { Link } from 'react-router-dom';
import FaQ_QM_Data from './data/faq_data';
import FaQ_List from './data/faq_list';



function QNA() {

    const rendertext = (text) => {
        return text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = FaQ_List.slice(indexOfFirstItem, indexOfLastItem);
    const faqPlusRefs = useRef({});

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const [activeItem, setActiveItem] = useState(null);
    const [nextItem, setNextItem] = useState(null);
    const [dropdownHeight, setDropdownHeight] = useState(0); // 드롭다운 높이 상태를 추가함
    const dropdownRefs = useRef(new Map());

    const handleTransitionEnd = (id) => {
        if (activeItem === id) {
            setActiveItem(null);
            if (nextItem) {
                setActiveItem(nextItem); // 다음 아이템 열기
                setNextItem(null); // 다음 아이템 상태 초기화
            }
        }
    };

    const handleItemClick = (id) => {
        const currentPlusElement = faqPlusRefs.current[id]; // 현재 클릭된 아이템의 plus 요소 참조
        if (activeItem === id) {
            // 드롭다운을 닫음
            setDropdownHeight(0);
            currentPlusElement.classList.remove('active');
            currentPlusElement.classList.add('inactive');
    
            const currentDropdown = dropdownRefs.current.get(id);
            if (currentDropdown) {
                currentDropdown.addEventListener('transitionend', () => handleTransitionEnd(id), { once: true });
            }
        } else {
            // 드롭다운을 엶
            setActiveItem(id);
            currentPlusElement.classList.remove('inactive');
            currentPlusElement.classList.add('active');
        }
    };

    useEffect(() => {
        if (activeItem) {
            const currentDropdown = dropdownRefs.current.get(activeItem);
            if (currentDropdown) {
                setDropdownHeight(currentDropdown.scrollHeight);
            }
        }
    }, [activeItem]);
    

    return (
        <>
            <div className='faq_help_container'>
                <div className='faq_help_bar'>
                    <Link to='/faq'>
                        <div className='faq_help_bar_faq'>FAQ</div>
                        <div className='faq_line_bar'></div>
                    </Link>
                    <Link to='/qna'>
                        <div className='faq_help_bar_qna'>1:1문의</div>
                    </Link>
                </div>
                <div className='faq_section'>
                    <h2 className='faq_title_name'>
                        FAQ
                    </h2>
                    <div className='faq_qms_section'>
                        {FaQ_QM_Data.map((item) => (
                        <div key={item.id} className='qms_info'>
                            <Link to = {item.path} >
                                {(item.text)}
                            </Link>
                        </div>
                        ))}
                    </div>
                    <div className='faq_content'>
                        <div className='faq_info'>
                            <div className='faq_content_info'>
                                <div className='faq_right_content'>
                                    <div className='faq_form_search'>
                                        <from className='searchform'>
                                            <input name='faq_search' placeholder='검색어를 입력하세요' type='text'></input>
                                            <div className='faq_search_img'>
                                            </div>
                                        </from>
                                    </div>
                                </div>
                                <div className='faq_counts'>
                                    총 {FaQ_List.length}건의 게시글이 있습니다.
                                </div>
                            </div>
                            <div className='faq_contens_list'>
                            {currentItems.map((item) => (
                                <div key={item.id} 
                                className={`faq_list_info ${activeItem === item.id ? 'active' : ''}`} 
                                onClick={() => handleItemClick(item.id)}
                                style={activeItem === item.id ? { backgroundColor: '#f2f2f2' } : {}}
                                >
                                    <div className='faq_list_section' onClick={() => handleItemClick(item.id)}>
                                        <div className='faq_list_p'>P</div>
                                        <div className='faq_list_content'>{item.title}</div>
                                        <div ref={(el) => faqPlusRefs.current[item.id] = el} className='faq_list_plus'></div>
                                    </div>
                                    {activeItem === item.id && (
                                    <div className='faq_list_aska'>
                                        <div ref={el => dropdownRefs.current.set(item.id, el)} 
                                        className='faq_dropdown_content' 
                                        style={{ height: activeItem === item.id ? `${dropdownHeight}px` : '0px' }}>
                                            <div className='faq_list_a'>A</div>
                                            <div className='faq_list_ask'>{rendertext(item.text)}</div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            ))}
                                </div>
                            <div className='faq_page_list'>
                                {/* 이전 페이지 버튼 */}
                                {currentPage > 1 && (
                                    <span onClick={() => paginate(currentPage - 1)}>&lt;</span>
                                )}
                                {Array.from({ length: Math.ceil(FaQ_List.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                                    <span key={number} onClick={() => paginate(number)}>
                                        {number}
                                    </span>
                                ))}
                                {/* 다음 페이지 버튼 */}
                                {currentPage < Math.ceil(FaQ_List.length / itemsPerPage) && (
                                    <span onClick={() => paginate(currentPage + 1)}>&gt;</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QNA;
