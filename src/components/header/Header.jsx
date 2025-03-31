import Image from "next/image"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Header() {

    return (
        <header className="m-4 flex justify-between items-center py-6 rounded-2xl px-8 bg-card/80 z-50 backdrop-blur-md sticky top-3">
            <div className="flex items-center gap-1">
                <Image src="/logo.svg" alt="Logo" width={45} height={45} />
                <h1 className="text-xl leading-none antialiased font-serif font-light tracking-tight ml-2">A Evolução<br />da Apple</h1>
            </div>
            <NavigationMenu>
                <NavigationMenuList className="flex text-sm">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild href="#" ><Button variant="ghost">Home</Button></NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#" ><Button variant="ghost">Modelos</Button></NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#" ><Button variant="ghost">Linha do Tempo</Button></NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#" ><Button variant="ghost">Sobre</Button></NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )

}