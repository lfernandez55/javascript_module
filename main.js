import { mod } from './module.js';

function hello()
{
    console.log(mod());
}
document.querySelector('button').addEventListener('click', hello);
