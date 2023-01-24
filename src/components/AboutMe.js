import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import imgTest from '../images/profile.jpg';

function AboutMe() {
    return(
        <div>
            <div style={{margin:'auto',width:'30%'}}>
                <Card className="bg-dark text-white">
                    <Card.Img src={imgTest} alt="Card image" />
                </Card>       
            </div>

            <div>
                <Card style={{textAlign:'center'}}>
                    <Card.Header><p><span style={{fontSize:'18px'}}>이름: </span><span>이주혁(LeeJuHyeok / 李柱焃)</span></p></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>생년월일: </span><span>970319</span></p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>주소지: </span><span>충남 천안시</span></p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>연락처: </span><span>010-2924-8915</span></p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>이메일: </span><span>lmsmd00@naver.com</span></p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>학력: </span><span>천안신용초(졸업), 천안용곡중(졸업), 천안쌍용고(졸업), 공주대학교(중어중문학과) 졸업예정</span></p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>자격증&수료: </span>운전면허(1종보통), 한국사1급, 新HSK 4급, 휴먼교육센터-풀스텍(프론트엔드/백엔드) 6개월 과정 수료, 선문대학교-파이썬 기초과정 1개월 과정 수료</p></ListGroup.Item>
                        <ListGroup.Item><p><spaan style={{fontSize:'18px'}}>사회경력: </spaan> 이디야카페 18개월(알바, 매니저) 현대자동차 생산보조(엔진조립 2개월), TV디스플레이(설비 보조 2개월), 우정공무연수원(단기알바 1개월), 홀서빙(3개월) 등 단기알바 多</p></ListGroup.Item>
                        <ListGroup.Item><p><span style={{fontSize:'18px'}}>특이사항: </span>육군병장 만기전역(공병)</p></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div> 
        </div>
    )
}

export default AboutMe;