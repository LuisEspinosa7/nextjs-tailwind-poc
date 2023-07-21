import AppNavbar from '@/components/AppNavbar'


export default function Dashboard() {
    return (
      <main className='min-h-screen'>
        <AppNavbar/>
        
        <section className='flex h-screen text-center text-black bg-white pt-20'>
          <h1 className='m-auto'>Dashboard</h1>
        </section>
        
      </main>
    )
  }