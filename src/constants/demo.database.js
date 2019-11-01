export const all_users = [
    {name :"Dave", id: "dave", email: "dave@react.com", friends : ["john", "mark", "dave", "jessica"]},
    {name :"John", id: "john", email: "john@react.com", friends : ["mark", "dave", "jessica"]},
    {name :"Mark", id: "mark", email: "mark@react.com", friends : ["john", "katie", "jessica"]},
    {name :"Jessica", id: "jessica", email: "jessica@react.com"},
    {name :"Katie", id: "katie", email: "katie@react.com"},
];


export const chat_history = {
    "dave" : [
        {
            user_id : "john",
            messages : [
                {
                    user_id : "dave",
                    message : "Hello John"
                },
                {
                    user_id : "john",
                    message : "Hello Dave"
                }
            ]
        },
        {
            user_id : "jessica",
            messages : [
                {
                    user_id : "dave",
                    message : "Hello Jessica"
                },
                {
                    user_id : "john",
                    message : "Hello Dave"
                }
            ]
        }
    ],
    "mark" : [
        {
            user_id : "katie",
            messages : [
                {
                    user_id : "dave",
                    message : "Hello Mark"
                },
                {
                    user_id : "mark",
                    message : "Hello Katie"
                }
            ]
        },
        {
            user_id : "jessica",
            messages : [
                {
                    user_id : "mark",
                    message : "Hello Jessica"
                },
                {
                    user_id : "jessica",
                    message : "Hello mark"
                }
            ]
        }
    ]
}
