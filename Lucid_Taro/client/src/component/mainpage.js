import React, { useState } from 'react'

import Header from './common/Header';
import Main from './common/Main';

function Mainpage() {

	return (
		<div className="wrap_main">
			<header><Header /></header>
			<Main />
		</div>
	)
}

export default Mainpage
