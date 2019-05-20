import React from 'react';
import { FaTwitter, FaGithub, FaMedium } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<footer class="footer has-text-centered">
		<div class="container">
				<div class="columns">
				<div class="column">
					<p>©Ocnabolnica Foukus</p>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
