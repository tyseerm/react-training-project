export const defaultState = {
    session: {
        authenticated: false,
    },
    users: [{
        id: "u1",
        name: "engineer 1",
        role: "engineer",
    }, {
        id: "u2",
        name: "users 2",
        role: "staffing",
    }, {
        id: "u3",
        name: "engineer 3",
        role: "engineer",
    }
    ],
    engineers: [{
        id: "e1",
        level: "eng 1",
        user: "u1",
        bio: "hello I'm eng 1",
    }, {
        id: "e2",
        level: "eng 4",
        user: "u3",
        bio: "hello I'm eng 2",
    },],
    profiles: [
        {
            owner: "e1",
            link: "eng1 link",
        }, {
            owner: "e2",
            link: "eng2 link",
        },
    ],
    skills: [
        {
            id: "s1",
            owner: "e1",
            name: "java",
            years: 5,
        },
        {
            id: "s2",
            owner: "e1",
            name: "php",
            years: 3,
        },
        {
            id: "s3",
            owner: "e2",
            name: "nodejs",
            years: 5,
        },
        {
            id: "s4",
            owner: "e2",
            name: "react",
            years: 3,
        },
    ]
}