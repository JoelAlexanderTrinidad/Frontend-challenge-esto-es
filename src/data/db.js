import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const loadUsers = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'),'utf-8'));

};

export const storeUsers = (users) => {
    fs.writeFileSync(path.join(__dirname, 'users.json'),JSON.stringify(users,null,3),'utf-8');    
}