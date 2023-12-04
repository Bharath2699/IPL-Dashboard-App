import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const Piechart = props => {
  const {matchResults} = props
  const Wons = matchResults.filter(each => each.matchStatus === 'Won')
  const Won = Wons.length
  console.log(Wons)
  const Losses = matchResults.filter(each => each.matchStatus === 'Lost')
  const Loss = Losses.length
  console.log(Loss)
  const Drawns = matchResults.filter(each => each.matchStatus === 'Drawn')
  const Drawn = Drawns.length

  const results = [
    {Status: 'Won', Count: Won},
    {Status: 'Loss', Count: Loss},
    {Status: 'Drawn', Count: Drawn},
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={results}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="Count"
        >
          <Cell name="Won" fill="#fecba6" />
          <Cell name="Loss" fill="#b3d23f" />
          <Cell name="Drawn" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="center"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default Piechart
