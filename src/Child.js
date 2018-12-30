import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { padlet, imageContainer, leftImgContainer, rightImgContainer, sideImg, image, textBox, btnGroup, header, author, sources } from './style.js';
import { Button, ButtonGroup, Collapse } from 'reactstrap';

const DOS = "https://www.state.gov/documents/organization/282798.pdf";
const NYF = " https://www.nepalyouthfoundation.org/programs/empowering-freed-kamlaris/";
const RtR = "https://www.roomtoread.org/countries/nepal/";
const nepalFlag = 'https://www.flickr.com/photos/thomasapplegate/291548097/in/photolist-rLg6k-kg1JJ-8ZsErj-6RTW3k-4LyQQW-9bmWq7-k1Vf4-3LfK6d-7M2Do2-jga7e-7M6CSj-7NZgrr-7M2EbP-441DX9-4a8qv8-7M6C9W-3aseP7-CFGuke-DXWyZw-CLbrNm-D3GSdj-nrXC5H-4acuco-9vx8aq-ChFN2w-DcTjf9-D5Cvcs-4LCD85-ChP6yv-sTurhH-5T5hV9-CWQgg9-CfMUEb-ChnbBz-CRU2KP-C2PZWC-N9g2VH-21VmpQy-Cx59Ss-CPzJKW-BWTPtK-BKE98a-ms3iJn-vMdXHU-v9R6va-uB7Uqz-bjXtHD-9bmKuC-7M6CdN-4eDJ7R';

export class Child extends Component {
	constructor(props) {
		super(props);
		this.state = { collapse: false };
		this.state = { hidden: 'visible' };

		this.toggle = this.toggle.bind(this);
		this.leftClick = this.leftClick.bind(this);
		this.rightClick = this.rightClick.bind(this);
		this.startOver = this.startOver.bind(this);
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	startOver() {
		if (this.props.count < 2) {
			//nothing
		} else {
			this.props.onClick(0);
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			if (this.props.count > 0) {
				this.setState({ hidden: 'hidden' });
			}
		}
	}

	leftClick() {
		let count = this.props.count;
		if (count === 4 || count === 5 || count > 14) {
			//nothing
		} else {
			count += 1;
			this.props.onClick(count);
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			if (count > 0) {
				this.setState({ hidden: 'hidden' });
			}
		}
	}

	rightClick() {
		const offset = 10;
		let count = this.props.count;
		if (count < 2 || count === 4 || count === 5 || count > 14) {
			//nothing
		} else {
			if (count === 2) {
				count += offset;
			}
			count += 2;
			this.props.onClick(count);
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			if (count > 0) {
				this.setState({ hidden: 'hidden' });
			}
		}
	}

	render() {
		return (
			<div>
				<div style = {header}>
					<div style={imageContainer}>
						<img src = "trafficking3.jpg" style={image}/>
					</div>
					<h1>StopBondage</h1>
					<h5>A Story Game</h5>
					<h6 style = {author}>By Matthew Iceland</h6>
				</div>
				<div style={padlet}>
					<div style={leftImgContainer}>
						<img src = "RTR Logo_black.jpg" style={sideImg}/>
					</div>
					<div style={rightImgContainer}>
						<img src = "291548097_20bc97700c.jpg" style={sideImg} />
					</div>
					<div style = {textBox}>
						<p style = {{fontSize: '1em', color: 'rgb(20, 173, 71)', float: 'left', margin: '0.5%', border: '2px dotted rgb(20, 173, 71)', borderRadius: 10, padding: '1%'}}>Start here:</p>
						<p>{this.props.text.text}</p>
					</div>
					<ButtonGroup style = {btnGroup}>
						<Button color="success" onClick = {this.startOver}>{this.props.text.b3}</Button>
						<Button color="success" onClick = {this.leftClick}>{this.props.text.b1}</Button>
						<Button color="success" onClick = {this.rightClick}>{this.props.text.b2}</Button>
					</ButtonGroup>
					<br />
					<Button color="link" onClick={this.toggle} style = {{ marginTop: '1.5rem' }}>Sources</Button>
					<Collapse isOpen={this.state.collapse}>
						<p style = {sources}> 
							[1] Stone, T. L. (2017). GIRL RISING CHANGING THE WORLD ONE GIRL AT A TIME (1st ed.). New York: Wendy Lamb Books.
							<br />
							[2] Global Partnership for Education. (2018, September 24). 12 years to break down the barriers to girls' education. Retrieved from https://www.globalpartnership.org/multimedia/infographic/breaking-down-barriers-girls-education
							<br />
							[3] U.S. Department of State. (2018, June). Trafficking in Persons Report. Retrieved December 25, 2018, from {DOS}
							<br />
							[4] Nepal Youth Foundation. (n.d.). Empowering Freed Kamlaris. Retrieved December 25, 2018, from {NYF}
							<br />
							[5] Room to Read. (2018). Nepal. Retrieved December 25, 2018, from {RtR}
							<br />
							Image Credit: www.flicker.com

						</p>
					</Collapse>
				</div>
			</div>
		);
	}
}