import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class FakeApiService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let skills = [
      {
        id: 1,
        name: "Visão Geral",
        description:
          "Perinity GRC - O caminho para a longevidade da sua empresa. Gerencie riscos, defina metas e aprimore a conformidade para se destacar no mercado e garantir a segurança e responsabilidade do seu negócio.",
        pic: "assets/geral.png",
        likes: 0,
      },
      {
        id: 2,
        name: "Atendimento ao Cliente",
        description:
          "Atendimento ao cliente ímpar - Nossa equipe de Customer Success está ao seu lado desde a implantação até o engajamento contínuo, garantindo que sua experiência com a Perinity GRC seja excepcional em todos os momentos.",
        pic: "assets/atendimento.jpg",
        likes: 0,
      },
      {
        id: 3,
        name: "Novo Nome e Marca",
        description:
          "Uma nova identidade - Apresentamos o novo nome e marca da Perinity GRC, reafirmando nosso compromisso com a excelência em gestão de riscos e conformidade.",
        pic: "assets/perinity.png",
        likes: 0,
      },
      {
        id: 4,
        name: "Benefícios da Plataforma",
        description:
          "Resolva problemas e alcance benefícios - Com a Perinity GRC, automatize processos diários, gerencie riscos e controles, atenda auditorias internas e externas, e fortaleça sua cultura de gestão para alcançar resultados excepcionais.",
        pic: "assets/beneficios.jpg",
        likes: 0,
      },
      {
        id: 5,
        name: "Longevidade Empresarial",
        description:
          "Garanta que sua empresa esteja à frente, responsável, segura e duradoura, com o auxílio da Perinity GRC. A plataforma oferece soluções para a gestão de riscos, controles internos, auditorias, compliance e segurança da informação.",
        pic: "assets/seguranca.png",
        likes: 0,
      },
      {
        id: 6,
        name: "Vantagens Competitivas",
        description:
          "Esteja à frente do mercado - Com uma ampla cultura de gestão e controle de riscos, sua empresa terá vantagens competitivas que se destacam perante os concorrentes.",
        pic: "assets/vantagem.jpg",
        likes: 0,
      },
      {
        id: 7,
        name: "Gestão de Riscos",
        description: "Com a plataforma Perinity GRC, você pode gerenciar riscos de forma eficiente e eficaz, com uma visão completa e integrada de todos os riscos da sua empresa.",
        pic: "assets/riscos.jpeg",
        likes: 0,
      },
      {
        id: 8,
        name: "Controles Internos",
        description: "A plataforma Perinity GRC permite que você gerencie controles internos de forma eficiente e eficaz, com uma visão completa e integrada de todos os controles da sua empresa.",
        pic: "assets/controle.jpeg",
        likes: 0,
      }
    ];

    return { skills };
  }
}
