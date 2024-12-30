import { FlaskConical, Globe, Calculator, Book } from "lucide-react";
import { useState } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CreateWithAi = () => {
    const [selected, setSelected] = useState<string>("");

    const areas = [
        {
            id: 1,
            name: "Linguagens",
            icon: Book,
        },
        {
            id: 2,
            name: "Matemática",
            icon: Calculator,
        },
        {
            id: 3,
            name: "Ciências Natureza",
            icon: FlaskConical,
        },
        {
            id: 4,
            name: "Ciências Humanas",
            icon: Globe,
        },
    ];

    const options = [
        {
            linguagens: [
                {
                    id: 1,
                    name: "Português",
                },
                {
                    id: 2,
                    name: "Literatura",
                },
                {
                    id: 3,
                    name: "Artes",
                },
                {
                    id: 4,
                    name: "Tecnologia da Informação",
                },
                {
                    id: 5,
                    name: "Língua Estrangeira",
                },
            ],
            matematica: [
                {
                    id: 1,
                    name: "Matemática",
                },
                {
                    id: 2,
                    name: "Álgebra",
                },
                {
                    id: 3,
                    name: "Geometria",
                },
                {
                    id: 4,
                    name: "Probabilidade e Estatística",
                },
                {
                    id: 5,
                    name: "Matemática Financeira",
                },
            ],
            natureza: [
                {
                    id: 1,
                    name: "Química",
                },
                {
                    id: 2,
                    name: "Física",
                },
                {
                    id: 3,
                    name: "Biologia",
                },
                {
                    id: 4,
                    name: "Meio Ambiente",
                },
            ],
            humanas: [
                {
                    id: 1,
                    name: "História",
                },
                {
                    id: 2,
                    name: "Geografia",
                },
                {
                    id: 3,
                    name: "Filosofia",
                },
                {
                    id: 4,
                    name: "Sociologia",
                },
            ],
        },
    ];

    const handleClickAreas = (name: string) => {
        setSelected(name);
        console.log(name);
    };
    const handleClickOptions = (name: string) => {
        console.log(name);
    };

    return (
        <div className="flex flex-col items-center p-5 md:px-24 lg:px-36">
            <div className="text-center">
                <h2 className="font-bold text-4xl text-blue-600">Inicie criando o seu plano personalizado</h2>
                <p className="text-gray-500 text-lg ">Escolha em detalhes qual area, assunto e conteúdo!</p>
            </div>

            <div className="mt-10 ">
                <div className="flex flex-col flex-wrap gap-5 mt-5">
                    <h2 className="text-center mb-2 text-lg">
                        Para qual area você quer criar o seu plano personalizado de estudo?
                    </h2>
                    <div className="flex gap-2 items-center justify-center">
                        {areas.map((item) => {
                            const { id, name, icon: Icon } = item;
                            return (
                                <div
                                    key={id}
                                    className={`p-4 flex gap-2 items-center justify-center border rounded-xl cursor-pointer hover:border-blue-500 ${
                                        selected === name && "border-blue-500"
                                    }`}
                                    onClick={() => handleClickAreas(name)}
                                >
                                    <Icon width={50} height={50} />
                                    <h2 className="text-sm text-center mt-2">{name}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 flex flex-col justify-center items-center">
                    <h2 className="text-center mb-5 text-lg">Agora, escolha o contéudo para mais um passo!</h2>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="border border-gray-500 rounded-lg p-2">
                            Clique e abra as opções
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {selected === "Linguagens"
                                ? options.map((item) =>
                                      item.linguagens.map((linguagem) => (
                                          <DropdownMenuItem
                                              onClick={() => handleClickOptions(linguagem.name)}
                                              key={linguagem.id}
                                          >
                                              {linguagem.name}
                                          </DropdownMenuItem>
                                      ))
                                  )
                                : selected === "Matemática"
                                ? options.map((item) =>
                                      item.matematica.map((matematica) => (
                                          <DropdownMenuItem
                                              onClick={() => handleClickOptions(matematica.name)}
                                              key={matematica.id}
                                          >
                                              {matematica.name}
                                          </DropdownMenuItem>
                                      ))
                                  )
                                : selected === "Ciências Natureza"
                                ? options.map((item) =>
                                      item.natureza.map((natureza) => (
                                          <DropdownMenuItem
                                              onClick={() => handleClickOptions(natureza.name)}
                                              key={natureza.id}
                                          >
                                              {natureza.name}
                                          </DropdownMenuItem>
                                      ))
                                  )
                                : selected === "Ciências Humanas"
                                ? options.map((item) =>
                                      item.humanas.map((humanas) => (
                                          <DropdownMenuItem
                                              onClick={() => handleClickOptions(humanas.name)}
                                              key={humanas.id}
                                          >
                                              {humanas.name}
                                          </DropdownMenuItem>
                                      ))
                                  )
                                : null}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
};

export default CreateWithAi;
