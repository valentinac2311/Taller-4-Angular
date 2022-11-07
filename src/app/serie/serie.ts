export class Serie {
  id: number;
  name: string;
  seasons: number;
  channel: string;
  descripcion: string;
  link: string;
  foto: string;

  public constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, link: string, foto: string) {
    this.id = id;
    this.name = name;
    this.seasons = seasons;
    this.channel = channel;
    this.descripcion = descripcion;
    this.link = link;
    this.foto = foto;
  }
}
