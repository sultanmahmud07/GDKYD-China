import NavLink from './Shared/Navbar/NavLink';

const TestNavbar = () => {
    const navData = {
        menu1: { path: "/", title: "首页" },
        menu2: { path: "/product", title: "产品" },
        menu3: { path: "/about", title: "关于我们" },
        menu4: { path: "/process", title: "工艺流程" },
        menu5: { path: "/portfolio", title: "案例展示" },
        menu6: { path: "/news", title: "消息" }
    };
    const keys = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];
    return (
        <div className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-2xl items-end justify-between">
                <nav className="flex gap-6 pt-6">
                    {
                        keys.map((key, index) => {
                            return(
                                <NavLink
                                key={index}
                                href={navData[key].path}
                              >
                                {navData[key].title}
                              </NavLink>
                            )
                        })
                    }
                </nav>
            </div>
        </div>
    )
}

export default TestNavbar;