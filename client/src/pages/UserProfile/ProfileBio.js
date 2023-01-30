import React from 'react'
import '../../style/pages/UserProfile.css'
const ProfileBio = ({ currentProfile }) => {
	return (
		<div>
			<div>
				{
					currentProfile?.about ? (
						<>
							<h4>About</h4>
							<p>{currentProfile?.about}</p>
						</>
					) : <p>No Bio Found</p>
				}
			</div>
			<div>{
				currentProfile?.tags.length === 0 ? (
					<>
						<h4>Tags Watched</h4>
						{
							currentProfile?.tags.map((tag, index) => (
								<p key={index}>{tag}</p>
							))
						}
					</>
				) : <p>0 Tags Watched</p>}
			</div>



		</div>
	)

}

export default ProfileBio