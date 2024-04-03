// Made by Seth Stitik Following the Chat Engine Tutorial //

// Import React
import { PrettyChatWindow } from 'react-chat-engine-pretty'

// ChatsPage component
const ChatsPage = (props) => {
    // Return the PrettyChatWindow component
    return ( <div style={{ height: '100vh'}}>
        <PrettyChatWindow
            prokectID='567d33da-60d5-4fb6-a74e-7e4f6b73e6a4'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100vh'}}
        />
    </div>
    )
}

export default ChatsPage

