import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import java from '../images/java.jpg';
import sql from '../images/sql.jpg'


function Skills() {
    return(
        <div>
            <div>
                <CardGroup style={{textAlign:'center'}}>
                    <Card>
                        <Card.Img variant="top" src={html}/>
                        <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={css}/>
                        <Card.Body>
                            <Card.Title>CSS</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={js} />
                        <Card.Body>
                            <Card.Title>JAVA SCRIPT</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>

            <div>
                <CardGroup style={{textAlign:'center'}}>
                    <Card>
                        <Card.Img variant="top" src={react} />
                        <Card.Body>
                            <Card.Title>REACT</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={java} />
                        <Card.Body>
                            <Card.Title>JAVA</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={sql} />
                        <Card.Body>
                            <Card.Title>SQL</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            
        </div>

    )
}

export default Skills;