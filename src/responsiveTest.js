import MediaQuery from 'react-responsive'

export default function(){
return (
    <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
    </MediaQuery>
    <MediaQuery minWidth={10}>
        <p>You have a small screen</p>
      </MediaQuery>
  </div>
)
}
