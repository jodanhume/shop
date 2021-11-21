import React, { Component } from 'react';
class Nav extends Component {
    render() {
        return(
        <>
            <aside id="asideNav" class="
                asideNav
                fixed top-0 z-50
                bg-white
                h-full 
            ">
                <nav class="py-4" id="">
                    <div class="
                        flex justify-between px-7
                    ">
                        <h1 class="inline-block text-indigo-700 font-extrabold">S.P.A</h1>
                        <span id="asideNavCloseBtn">
                            <button onClick={ this.props.toggleClose }>
                                <i class="fas fa-times"></i>
                            </button>
                        </span>
                    </div>
                    <ul class="my-10">
                        <li class="py-3 px-7 border-t"><a href="index.html">Home</a></li>
                        <li class="py-3 px-7 border-t"><a href="/">About</a></li>
                        <li class="py-3 px-7 border-t"><a href="/">Shop U.I</a></li>
                        <li class="py-3 px-7 border-t"><a href="/">Item</a></li>
                        <li class="py-3 px-7 border-t border-b"><a href="/">Setting</a></li>
                    </ul>
                </nav>
            
            </aside>
            <div id="asideNavBg" class="
            fixed z-40 top-0
            w-full
            h-full
            bg-black
            opacity-50
            hidden
        "></div>
        </>
        )
    }
}

export default Nav;