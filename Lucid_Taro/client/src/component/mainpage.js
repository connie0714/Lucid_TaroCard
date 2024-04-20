import React, { useState } from 'react'

import Header from './common/header';
import Main from './common/main';

function Mainpage() {

	return (
		<div className="wrap_main">
			<header><Header /></header>
			<Main />
		</div>
	)
}

export default Mainpage
