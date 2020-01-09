import md5 from "md5";
export const defaultState = {
 // session: {
   // authenticated: false
  //},
  users: [
    {
      id: "u1",
      name: "e1",
      role: "engineer",
      passwordHash: md5("123")
    },
    {
      id: "u2",
      name: "u2",
      role: "staffing",
      passwordHash: md5("test")
    },
    {
      id: "u3",
      name: "en3",
      role: "engineer",
      passwordHash: md5("test123")
    }
  ],
  engineers: [
    {
      id: "e1",
      level: "eng 1",
      user: "u1",
      bio: "hello I'm eng 1"
    },
    {
      id: "e2",
      level: "eng 4",
      user: "u3",
      bio: "hello I'm eng 2"
    }
  ],
  profiles: [
    {
      owner: "e1",
      link: "eng1 link"
    },
    {
      owner: "e2",
      link: "eng2 link"
    }
  ],
  skills: [
    {
      id: "s1",
      owner: "e1",
      name: "java",
      years: 5
    },
    {
      id: "s2",
      owner: "e1",
      name: "php",
      years: 3
    },
    {
      id: "s3",
      owner: "e2",
      name: "nodejs",
      years: 5
    },
    {
      id: "s4",
      owner: "e2",
      name: "react",
      years: 3
    }
  ]
};
