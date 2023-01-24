import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import notionImg from '../images/notion.jpg';
import githubImg from '../images/github.jpg';
import instargram from '../images/instagram.jpg';
import facebook from '../images/facebook.jpg';

function Archiving() {
    return(
        <div>
            <Card >
                <Card.Img variant="top" src={notionImg} style={{width:'30%'}} />
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>
                    <Button  variant="secondary" href='https://flat-nurse-c29.notion.site/PROJECT-759aaa2c0d374fb89c2dd8639188a0d9' target='_blank'>Notion 바로가기</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        <br />
        <Card>
                <Card.Img variant="top" src={githubImg} style={{width:'30%'}}/>
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>
                    <Button  variant="secondary" href='https://github.com/ljhmd00?tab=repositories' target='_blank'>GitHub 바로가기</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        <br />
        <Card>
                <Card.Img variant="top" src={facebook} style={{width:'20%'}}/>
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>
                    <Button  variant="secondary" href='https://www.facebook.com/profile.php?id=100003268815685' target='_blank'>FaceBook 바로가기</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>    
        <br />
        <Card>
                <Card.Img variant="top" src={instargram} style={{width:'30%'}}/>
                <Card.Body>
                    <Card.Text style={{textAlign:'center'}}>
                    <Button  variant="secondary" href='https://www.instagram.com/l_ju_h' target='_blank'>In⭐gram 바로가기</Button>{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Archiving;