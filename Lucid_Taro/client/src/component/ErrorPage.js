import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ErrorPage() {
	const navigate = useNavigate();

	// const onLogout = () => {
	//    navigate('/')
	// }

	return (
		<div className='wrap_main'>
			<div className='wrap_error'>
				<div className='error_title'>
					<h1>404 Error</h1><br />
					<h2>Page not found</h2>
				</div>
				<div className='error_content'>
					<p>
						- 정확한 주소 입력했는지 확인하세요<br />
						- 주소에 특수문자를 입력하지 마세요
					</p>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage
