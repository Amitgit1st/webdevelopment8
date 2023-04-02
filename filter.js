var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//FILTER EVENT & CALLING FUNCTION filterItems()
filter.addEventListener('keyup',filterItems);

//DEFINITION OF filterItems()
function filterItems(e)
{
    var text = e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
     //convert ton array
    Array.from(items).forEach(function(item)
    {

        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else
        {
            item.style.display = 'none';
        }
    });
}