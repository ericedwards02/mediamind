import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list-view')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/list-view"!</div>
}
