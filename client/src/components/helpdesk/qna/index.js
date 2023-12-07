import './qna.css'
import { Link } from 'react-router-dom';

function QNA() {

    return (
        <>
            <div className='help_container'>
                <div className='help_bar'>
                    <Link to='/faq'>
                        <div className='help_bar_faq'>FAQ</div>
                    </Link>
                    <Link to='/qna'>
                        <div className='help_bar_qna'>1:1문의</div>
                    </Link>
                </div>
                <div className='help_section'>
                    {/* 내용이 들어갈 부분 */}
                </div>
            </div>
        </>
    );
}

export default QNA;
