import { useEffect, useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export function SupabaseStatus() {
  const [isConfigured, setIsConfigured] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkSupabaseConfig = () => {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
      
      setIsConfigured(!!(supabaseUrl && supabaseAnonKey))
      setIsChecking(false)
    }

    checkSupabaseConfig()
  }, [])

  if (isChecking) {
    return (
      <div className="p-4">
        <div className="text-sm text-muted-foreground">Checking Supabase configuration...</div>
      </div>
    )
  }

  if (isConfigured) {
    return (
      <Alert className="mb-4 border-green-500/20 bg-green-500/10">
        <CheckCircle2 className="h-4 w-4 text-green-500" />
        <AlertTitle className="text-green-500">Supabase Connected</AlertTitle>
        <AlertDescription className="text-green-600">
          Your Supabase integration is properly configured and ready to use.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert className="mb-4 border-orange-500/20 bg-orange-500/10">
      <AlertCircle className="h-4 w-4 text-orange-500" />
      <AlertTitle className="text-orange-500">Supabase Integration Required</AlertTitle>
      <AlertDescription className="text-orange-600 space-y-2">
        <p>To enable authentication and database features, please connect your Supabase integration.</p>
        <p className="text-sm">Click the green Supabase button in the top right corner to get started.</p>
      </AlertDescription>
    </Alert>
  )
}