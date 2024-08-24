import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMastodon, faYoutube, faBehance, faReddit, faGithubAlt } from "@fortawesome/free-brands-svg-icons"

const data = [
    {
        id:0,
        title:"Mastodon",
        icon: faMastodon,
        url:"https://mastodon.social/@lemssiah"
    },
    {
        id:1,
        title:"Github",
        icon:faGithubAlt,
        url:"https://github.com/Arteque"
    },
    {
        id:2,
        title:"Behance",
        icon:faBehance,
        url:"https://www.behance.net/artecke"
    },
    {
        id:3,
        title:"Youtube",
        icon:faYoutube,
        url:"https://www.youtube.com/@artecke99999"
    },
    {
        id:4,
        title:"Reddit",
        icon:faReddit,
        url:"https://www.reddit.com/user/LemssiahCode/"
    }
]

const Socials = () => {
    return <ul className="flex items-center gap-3">
                {
                    data.map((item)=>{
                        return <li key={item.id}>
                                    <a href="{item.url}" title={`Ich bin auf ${item.title}`} target="_blank" rel="noopener noreferrer nofollow" className="text-prime hover:text-prime-100 hover:bg-bg duration-[.3s]">
                                        <FontAwesomeIcon icon={item.icon} size="lg"/>
                                    </a>
                               </li>
                    })
                } 
           </ul>
}

export default Socials