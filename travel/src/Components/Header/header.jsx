import React ,{useRef,useEffect}from 'react'
import {Container,Row,Button} from 'reactstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../asstets/images/logo.png'
import './geader.css'
const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
       path:'/about',
       display:'About' 
    },
    {
        path:'/tours',
        display:'Tours'
    },
];
const Header = () => {
    const headerRef = useRef(null)
    const stickyHeaderfunc =()=>{
        window.addEventListener(
            'scroll',()=>{
            if(document.body.scrollTop >80 || document.documentElement.screen)
                headerRef.current.classList.add('sticky__header')
        }
        else
        {
            headerRef.current.classList.remove('sticky__header')
        } 
        
    })    
}
useEffect(()=>{
    const headerRef = useRef(null)
    const stickyHeaderFunc =()=>{
        window.addEventListener(
            'scroll',()=>{
            }
            useEffect(()=>{
                stickyHeaderfunc();
                return window.removeEventListener('')
            })
    }
})
