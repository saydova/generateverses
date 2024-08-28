import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


export default function Navigation (){
    return(
        <Navbar fluid className="dark" style={{backgroundColor:"#22333b"}}>
        <NavbarBrand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold" style={{color:"#ffe6a7"}}>Qur'anVerses</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          
          <Button style={{ color:"white", backgroundColor:"#22333b"}}>القرآن - Online</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse >
          <NavbarLink style={{color:"#ffe6a7"}} href="#">Baca Qur'an</NavbarLink>
          <NavbarLink style={{color:"#ffe6a7"}} href="#">Sholawat</NavbarLink>
          <NavbarLink href="#"  ><img style={{maxWidth:22}} src=".././src/assets/img/logowhite.png"/></NavbarLink>
          <NavbarLink style={{color:"#ffe6a7"}} href="#">Shallat</NavbarLink>
          <NavbarLink style={{color:"#ffe6a7"}} href="#">Sunah</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    )

}