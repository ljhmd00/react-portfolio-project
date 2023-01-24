import Carousel from 'react-bootstrap/Carousel';
import project1Bg from '../videos/firstProjectBg.mp4';
import project2Bg from '../videos/secondProjectBg.mp4';
import project3Bg from '../videos/thirdProjectBg.mp4';
import project4Bg from '../videos/project4.mp4';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Project() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);



    return(
        <div>
            <Carousel slide={false}>
                <Carousel.Item >
                    <video src={project1Bg} autoPlay loop muted style={{opacity:'0.8',width:'100%'}}/>
                    <Carousel.Caption >
                        <Button variant="dark" onClick={handleShow} style={{backGroundColor:'black'}}>상세보기</Button>                   
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item  slide={false}>
                    <video src={project2Bg} autoPlay loop muted style={{opacity:'0.8',width:'100%'}}/>
                    <Carousel.Caption>
                    <Button variant="dark" onClick={handleShow2} style={{backGroundColor:'black'}}>상세보기</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item  slide={false}>
                    <video src={project3Bg} autoPlay loop muted style={{opacity:'0.8',width:'100%'}}/>
                    <Carousel.Caption>
                    <Button variant="dark" onClick={handleShow3} style={{backGroundColor:'black'}}>상세보기</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item  slide={false}>
                    <video src={project4Bg} autoPlay loop muted style={{opacity:'0.8',width:'100%'}}/>
                    <Carousel.Caption>
                    <Button variant="dark" onClick={handleShow4} style={{backGroundColor:'black'}}>상세보기</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>First Project (개인 프로젝트)</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p><span style={{fontSize:'18px'}}>프로젝트 이름: </span><span>HOTEL YOGIYA</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 컨셉: </span><span>React 기반, 반응형 호텔 웹 사이트 제작</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 내용: </span><a href='https://flat-nurse-c29.notion.site/1-22-09-19-22-09-29-8928d52f8ba94d21b949ef30d70ce433' target='_blank'>노션 바로가기</a></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 발표: </span><span><a href='https://docs.google.com/presentation/d/1v52EHRciR12cS_2Y6sFpgZSl2XhoOqkkuZyfB0BtROU/edit?usp=sharing' target='_blank'>💻(구글 프레젠테이션 이동)</a></span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 이동: </span><span><a href='https://ljhmd00.github.io/reactProject/' target='_blank'>▶️(1차 프로젝트 바로가기)</a></span></p>

                        </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Second Project (팀 프로젝트)</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p><span style={{fontSize:'18px'}}>프로젝트 이름: </span><span>JEJU EOTTAE</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 컨셉: </span><span>Java jsp기반, SQL연동 호텔 예약 페이지 제작</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 내용: </span><a href='https://frequent-frog-c28.notion.site/2-06f386f8195b4f5baa795a0d91f2be14' target='_blank'>노션 바로가기</a></p>
                            <p><span style={{fontSize:'18px'}}>역할:</span><br/>
                                <span>(Jsp, Java, Sql) 회원가입, 로그인, 로그아웃, 회원정보 수정, 탈퇴 기능 구현
                                    <br/>(Java script 배열 활용)구글맵API를 활용하여 DB에 있는 호텔 좌표값 이용하여 호텔정보를 지도에 표시 
                                    <br/>Session을 활용하여 로그인 하였을 떄에만 웹페이지 기능을 사용 할 수 있도록 구현
                                </span>

                            </p>
                        </div>
                        
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}> Close </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show3} onHide={handleClose3} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Portfolio Project (개인 프로젝트) </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p><span style={{fontSize:'18px'}}>프로젝트 이름: </span><span>J.H portfolio</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 컨셉: </span><span>React기반, 반응형 포트폴리오 사이트제작, React bootstrap활용</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 내용: </span><a href='https://flat-nurse-c29.notion.site/3-22-12-04-22-12-06-7bff10abcfc1486b9863421cb7ccc3f4' target='_blank'>노션 바로가기</a></p>
                        </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}> Close </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show4} onHide={handleClose4} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Third Project (팀 프로젝트) </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p><span style={{fontSize:'18px'}}>프로젝트 이름: </span><span>MakeMate</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 컨셉: </span><span>React, Spring boot, Jpa, Sql, KaKao Map Api 를 활용한 게시판 사이트 제작</span></p>
                            <p><span style={{fontSize:'18px'}}>프로젝트 내용: </span><a href='https://alike-methane-f6b.notion.site/3-Make-Mate-2752621a5fed404996cf448ed73b2626' target='_blank'>노션 바로가기</a></p>
                            <p><span style={{fontSize:'18px'}}>역할: </span><br/>
                                <span>(Jpa, Spring boot, React)카카오맵 API를 활용하여 카카오맵 생성 - 사용자로부터 주소를 입력받아 해당 지역으로 지도 이동 및 마커 표시, SQL table에 저장
                                    <br/>(Java script, React, Css) 메이페이지 제작 및 웹 페이지 전체, 세부 적인 css 담당
                                </span>
                            </p>
                        </div>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}> Close </Button>
                </Modal.Footer>
            </Modal>


            
        </div>

    )
}

export default Project;