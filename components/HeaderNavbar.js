import { useState } from "react"


const HeaderNavbar = () => {

  const [isDropDown,setDropDown] = useState(false)
  const listDropDown = [
    {
      text: 'Hoby',
      link: '#'
    },
    {
      text: 'Memasak',
      link: '#'
    },
    {
      text: 'Marathon',
      link: '#'
    },
  ]

  const menusNavbar = [
    {
      text: 'Front end',
      link: '#'
    },
    {
      text: 'Back end',
      link: '#'
    },
    {
      text: 'UI Design',
      link: '#'
    },
    {
      text: 'About me',
      link: '#'
    },

  ]

  const eventToggle = () => {
    setDropDown(!isDropDown)
  }

  return (
    <nav className="border-0">
        <div className="container mx-auto ">
          <div className="flex h-28 items-center justify-between">
            <div className="w-2/12">
              <h1 className="text-white text-2xl font-patrick font-bold">IrfanBlog</h1>
            </div>
            <div className="w-8/12">
              <ul className="flex gap-9 text-white capitalize">
                {
                  menusNavbar.map(item => (
                    <li key={Math.random()}><a href={item.link} className="hover:underline">{ item.text }</a></li>
                  ))
                }
                <li onClick={eventToggle} className="relative"><a className="hover:underline cursor-pointer">Lainnya ⤵ </a>
                  {
                  isDropDown &&
                  (
                    <ul className="text-gray-400 absolute w-[200px] flex flex-col gap-1 mt-4 shadow-2xl rounded-md">
                      {
                        listDropDown.map(item => (
                          <li key={ Math.random() }><a href={item.link} className="hover:text-white p-2 bg-gray-900 block">{ item.text }</a></li>
                        ))
                      }
                    </ul>
                  )
                  }
                </li>
              </ul>
            </div>
            <div className="w-3/12">
              <form>
                <div className="p-3 rounded-full bg-gray-800">
                  <input type="text" className="bg-transparent text-white  px-2 box-border border-none" placeholder="Search"/>
                </div>
              </form>
            </div>
          </div>
        </div>
     </nav>
  )
}

export default HeaderNavbar
