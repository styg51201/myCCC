import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/all.scss'
import '../css/stories.scss'

function StorieyCard(props){

    return(
        <>
            <Col>
                <Card className="bk-card">
                    <Card.Body className="bk-card-body">
                        <h3>{props.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: props.content}}></div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default StorieyCard