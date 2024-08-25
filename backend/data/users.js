import bcrypt from 'bcryptjs';

const users=[
    {
        name:'Admin User',
        email:'admin21@gmail.com',
        password:bcrypt.hashSync('nasar123',12),
        isAdmin:true,
    },
    {
        name:'User1',
        email:'user01@gmail.com',
        password:bcrypt.hashSync('user01',10),
        isAdmin:false,
    },
    {
        name:'User2',
        email:'user02@gmail.com',
        password:bcrypt.hashSync('user02',10),
        isAdmin:false,
    },
]

export default users;