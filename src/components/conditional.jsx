function Status({ isLoggedIn }) {
 ret
 </h1>
 );
}
function Notification({ hasUnread }) {
 return (
 <div>
 <h2>Inbox</h2>
 {hasUnread && <p>You have unread messages!</p>}
 </div>
 );
}
function Conditional(){
    return(
        <>
        <h1>{Status({ isLoggedIn :true})}</h1>
        <h1>{Notification({ hasUnread :true})}</h1>
        </>
    )
}
export  default Conditional;