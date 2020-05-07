function showDesc(x)
{
	const desc = document.getElementById('links_discription');
	switch(x) {
		case 1:
			desc.innerHTML = "Health Ministry had launched 2 toll free numbers to address any queries related to Corona Virus Infection.If you are feeling any symptoms of infection call the helpline number immediately";
			break;
		case 2:
			desc.innerHTML = "This Link contains a list of statewise helpline numbers. For queries related to a particular State or Union Territory call the particular helpline number. It can also be used to get related information about your region";
			break;
		case 3:
			desc.innerHTML = "This the official Corona HelpDesk WhatsApp number generated by Government of India.It is chatbot which can be helpful to spread awareness regarding COVID-19.It also helps curb spread of misinformation among people.";
			break;
		case 4:
			desc.innerHTML = "This an Unofficial yet trusted informational website created by a group of developers with a purpose to provide most accurate CoronaVirus data all over India. The data is collected from multiple reliable sources. This website is opensource and freely available at GitHub for interested people to contribute. ";
			break;
		case 5:
			desc.innerHTML = "This link contains a compilation/list of all other essential resources (contacts and websites) across India. It also contains contact number of Police Headquarters and Corona testing labs and Hospitals across all over India.";
			break;
	}
}
function hideDesc()
{
	const desc = document.getElementById('links_discription');
	desc.innerHTML = "These are few links and resources which can be helpful for further queries and references regarding COVID-19. These links are mostly official so can be trusted and provide legit information.";
}