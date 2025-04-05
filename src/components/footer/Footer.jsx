
export default function Footer() {

    return (
        <section className="p-12">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <a href="https://shadcnblocks.com">

                                </a>
                                <p className="text-xl font-semibold">Computadores Revolucionários</p>
                            </div>
                        </div>
                        {/* {menuItems.map((section, sectionIdx) => (
                <div>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))} */}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>Museu de Computação Prof.Odelar Leite Linhares
                            <br />Instituto de Ciências e Matemáticas e de Computação - ICMC
                            <br />Universidade de São Paulo - USP
                            <br />Avenida Trabalhador São-Carlense, nº 400, Centro.
                            <br />CEP 13566-590 - São Carlos - SP</p>
                        <ul className="flex gap-4">
                            {/* {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))} */}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};
