import NoteContainer from '@/components/Container/NoteContainer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full h-full">
      <NoteContainer width={15} height={15}>
        <div className="h-full flex justify-center items-center">note container</div>
      </NoteContainer>
    </main>
  )
}
