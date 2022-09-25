// React Component
import Burger from '@animated-burgers/burger-squeeze'
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css'
import {useEffect, useState} from 'react'
import NavbarMenu from './navbar-menu'
import {Link} from 'react-router-dom'

function NewNavbar() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen === true) {
            window.scrollTo(0, 0)
            document.querySelector('body').classList.add('overflow-y-hidden')
        } else {
            document.querySelector('body').classList.remove('overflow-y-hidden')
        }
    }, [isMenuOpen])

    return (
        <section>
            <div className='flex items-center justify-between h-[48px]'>
                <p className='col-span-2 font-medium text-[32px] flex items-end'>
                    while.act
                </p>

                <Link
                    to={'/'}
                    className='hidden lg:flex col-span-2 justify-end contact-us gap-2 hover:-mr-3 transition-all ease-out duration-500'
                >
                    Вернуться назад <span>-></span>
                </Link>
            </div>
        </section>
    )
}

export default NewNavbar
