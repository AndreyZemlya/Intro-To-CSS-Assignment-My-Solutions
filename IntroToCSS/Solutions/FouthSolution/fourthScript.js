let haveMore = true;

const messages = 
[
    "Congratulations you clicked on the image for some reason!",    
    "You clicked on the image again.",    
    "For what purpose do you keep doing this?",    
    "Aren't you sick of this yet?",    
    "That's it! I'm tired of coming up with texts to post. Goodbye!",    
];

let i = 0;
function AlertFunc()
{
    if(haveMore)
    {
        if(i < messages.length - 1)
        {
            alert(messages[i]);
            i++;
        }
        else 
        {
            haveMore = 0;
            alert(messages[messages.length - 1]);
        }
    }
}