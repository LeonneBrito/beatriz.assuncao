const Avatar = () => {
  return (
    <div className="text-center p-6">
      <img
        className="w-28 h-28 mx-auto rounded-full object-cover"
        src="/Avatar.jpg"
        alt="Beatriz Assunção"
      />
      <p className="mt-2 text-2xl font-bold">Beatriz Assunção</p>
      <p className="mt-2 text-sm text-gray-500">
        Fotógrafa, artesã e empreendedora
      </p>
    </div>
  )
}

export default Avatar
