import '../css/academics.css';

export default function Academics(props)
{
	return <div>
	
			<button class='menu' data-toggle="collapse" data-target="#uni">University</button>

			<div id="uni" class="collapse">
				<p>Lorem ipsum dolor text....</p>
				<p>Lorem ipsum dolor text....</p>
			</div>
			
			<button class='menu'  data-toggle="collapse" data-target="#adm">Admission</button>

			<div id="adm" class="collapse">
				<p>Lorem ipsum dolor text....</p>
				<p>Lorem ipsum dolor text....</p>
			</div>
			
			<button  class='menu'  data-toggle="collapse" data-target="#results">Results</button>

			<div id="results" class="collapse">
				<p>Lorem ipsum dolor text....</p>
				<p>Lorem ipsum dolor text....</p>
			</div>
			
			<button  class='menu'  data-toggle="collapse" data-target="#ach">Achievements</button>

			<div id="ach" class="collapse">
				<p>Lorem ipsum dolor text....</p>
				<p>Lorem ipsum dolor text....</p>
			</div>
	</div>
	
}