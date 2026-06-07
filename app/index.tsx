import { Redirect } from 'expo-router'
import { routes } from '@app-types/navigation'

export default function IndexRoute() {
  return <Redirect href={routes.welcome} />
}
