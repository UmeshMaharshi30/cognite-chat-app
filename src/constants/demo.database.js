export var all_users = {
    "dave" : {name :"Dave", id: "dave", email: "dave@react.com", friends : ["john", "mark", "katie", "jessica"]},
    "john" : {name :"John", id:"john", email: "john@react.com", friends : ["mark", "dave", "jessica"]},
    "mark" : {name :"Mark", id:"mark", email: "mark@react.com", friends : ["john", "katie", "jessica"]},
    "jessica" : {name :"Jessica", id: "jessica", email: "jessica@react.com"},
    "katie" : {name :"Katie", id : "katie", email: "katie@react.com"}
};


export var chat_history = {
    "dave" : [
        {
            id : "john",
            messages : [
                {
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello John"
                },
                {
                    id : "john",
                    message : "Hello Dave"
                },{
                    id : "dave",
                    message : "Hello Johergergeveb ergergegerh betththn"
                },
                {
                    id : "john",
                    message : "Hello Dave 12 efwfwvwg3rgrgr3g"
                }

            ]
        },
        {
            id : "jessica",
            messages : [
                {
                    id : "dave",
                    message : "Hello Jessica"
                },
                {
                    id : "jessica",
                    message : "Hello Dave"
                }
                ,
                {
                    id : "jessica",
                    message : "How are you doing ? "
                }
            ]
        }
    ],
    "mark" : [
        {
            id : "katie",
            messages : [
                {
                    id : "dave",
                    message : "Hello Mark"
                },
                {
                    id : "mark",
                    message : "Hello Katie"
                }
            ]
        },
        {
            id : "jessica",
            messages : [
                {
                    id : "mark",
                    message : "Hello Jessica"
                },
                {
                    id : "jessica",
                    message : "Hello mark"
                }
            ]
        }
    ]
}
