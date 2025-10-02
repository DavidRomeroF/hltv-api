import express from 'express'
import { HLTV } from 'hltv'

const app = express()

app.get('/team/:name', async (req, res) => {
  try {
    const team = await HLTV.getTeamByName({ name: req.params.name })
    res.json(team)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/teamStatsByName/:name', async (req, res) => {
  const team = await HLTV.getTeamByName({ name: req.params.name })
  if (!team) return res.status(404).send('Equipo no encontrado')
  const stats = await HLTV.getTeamStats({ id: team.id })
  res.json(stats)
})

app.listen(3000, () => console.log('API en http://localhost:3000'))
