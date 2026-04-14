import FotoPerfil from "../assets/perfil.png";

function Card() {
  return (
    <div className="w-full max-w-sm rounded-4xl bg-slate-900/90 border border-slate-50 p-9 text-center">
      <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-slate-50 bg-slate-800">
        <img
          src={FotoPerfil}
          alt="Perfil"
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-semibold">DanielBritoSJunior</h1>
      <p className="mt-2 text-sm text-slate-400">Indaiatuba, SP</p>
      <p className="mt-2 text-base text-slate-300">Full-Stack Developer</p>

      <div className="mt-8 space-y-4">
        <a
          href="#"
          className="block rounded-2xl bg-slate-700 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-600"
        >
          GitHub
        </a>
        <a
          href="#"
          className="block rounded-2xl bg-slate-700 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-600"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="block rounded-2xl bg-slate-700 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-600"
        >
          Instagram
        </a>
        <a
          href="#"
          className="block rounded-2xl bg-slate-700 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-600"
        >
          Portfolio Dev
        </a>
      </div>
    </div>
  );
}

export default Card;
