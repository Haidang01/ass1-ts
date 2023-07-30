import React from 'react'

const Header = ({ menus }) => {
    console.log(menus);
    return (
        <header>
            <div>
                <img src="https://picsum.photos/900/300" alt="" />
            </div>
            <nav>
                <ul>
                    {
                        menus.map((item) => {
                            return (
                                <li><a href={item.path}>{item.name}</a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header