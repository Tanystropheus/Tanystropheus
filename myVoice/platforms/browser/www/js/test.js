 
/*

afficher les donner
orgniser les donner



-   les image   ->  leur nombre d'utillisation
                ->  toute les phrase dans les quelle elle est presnte

-   les phrase  ->  en fonction du temp + (selection de une phrase)
                ->  definir toute les phrase differente
                ->  


*/



    paper.install(window);
    // Keep global references to both tools, so the HTML
    // links below can access them.
    var tool1, tool2, tool_diag;

    window.onload = function() {
        paper.setup('myCanvas');
    }

    var all_elem = [];
    var all_phrase = [];



 //   gen_x_sentence_in(10, phrase);

//    console.clear();
 //   console.log(phrase);




        function f2()
        {
            var group = new Group();

            var pt_tl = new Point(30, 10);
            var pt_br = new Point(400, 200);

            console.log("youuuouy");
            draw_the_grid(-87, 135, 5, group, pt_tl, pt_br);
        }
//*
        
        function f3()
        {
            gen_x_sentence_in(20, all_phrase);
      //      console.clear();
            console.log(all_phrase);
        }

        function get_image(lst_elem)
        {
             var lst_img = document.getElementsByClassName('img_stat');
            
            for(var x = 0; x < lst_img.length; x++)
            {
                lst_elem[x] = new myVoiceElem(x, lst_img.item(x).src, lst_img.item(x).width, 0, x, x, lst_img.item(x).alt, true);
            }
        }

        function gen_x_sentence_in(nb, sentence_tab)
        {
            get_image(all_elem);
            for(var i = 0; i < nb; i++)
            {
                add_one_sentence_to(sentence_tab);
            }
        }

        function add_one_sentence_to(sentence)
        {
            var mili_in_day = 1440000;
            var dist = 13 + parseInt(Math.random() * 5);
            var i = 0;
            var val = 0;
            var count = 0;
            var group_img = [];

            while(i < all_elem.length)
            {
                val = parseInt(Math.random() * dist) + 1;

                i +=  val;
                if (i >= all_elem.length)
                    break;
// ancience version (tebleau d'objet au lieu d'id) group_img[count] = all_elem[i];
                group_img[count] = i;     
                count++;
            }

            sentence[sentence.length] = new myVoiceSentence(sentence.length, group_img, parseInt(Date.now() - (Math.random() * mili_in_day * 30)));
        }

        function cmp_time(a, b)
        {
           //  console.log(a['time']);
            // console.log(b);
            return (a['time'] - b['time']);
        }

        function get_minmax(tab, name)
        {
            var min = tab[0][name];
            var max = tab[0][name];

            for (var x in tab)
            {
                if (tab[x][name] > max)
                    max = tab[x][name];
                if (tab[x][name] < min)
                    min = tab[x][name];
            }
            return ([min, max]);
        }

        function f5()
        {
           // console.clear();
           //  console.log("=============================== BEFOR ===============================");
           //  for (x = 0; x < all_phrase.length; x++)
            // {
            //     console.log(all_phrase[x]['time']);
            // }
            all_phrase.sort(cmp_time);
            // console.log("=============================== AFTER ===============================");
            // for (x = 0; x < all_phrase.length; x++)
            // {
            //     console.log(all_phrase[x]['time']);
            // }
        //    draw_line(all_phrase, 'time', 'nbUse');
        }

        function f4()
        {
            f3();
            console.clear();
            all_phrase.sort(cmp_time);
            
        }



/*
function draw_the_grid(min, max, nb_line, group, pt_tl, pt_br)
{
    var size_data = max - min;
    var delta_val = size_data / nb_line;
    var coef = (pt_br.y - pt_tl.y) / (max - min);

    var y = 0;
    while (y <= size_data + delta_val + 1)
    {
        console.log("y:"+y);
        var text = new PointText(new Point(0, pt_br.y));
        var path = new Path;
        var p1 = new Point();
        var p2 = new Point();

        p1.x = pt_tl.x;
        p1.y =  pt_br.y - (y);

        p2.x = pt_br.x;
        p2.y =  pt_br.y - y;



        path.add(p1);
        path.add(p2);
        path.strokeColor = 'black';

        text.content = parseInt(y + min);
        text.position = new Point(pt_tl.x - 15, pt_br.y - (y));
        text.fillColor = 'grey';
        group.addChild(text);
        group.addChild(path);
        y += delta_val;
                console.log(p1);
        console.log(p2);
            view.draw();
 //       console.log(path.segments[1]);
    }
    view.draw();
}

//*

        function ff4()
        {
            var group = new Group();
            var pt_tl = new Point(100, 100);
            var pt_br = new Point(200, 200);

            console.log("youuuouy");
            draw_the_grid(0, 130, 10, group, pt_tl, pt_br);
        }
//*/


/*
    cree une grille:
        il faut le min et le max
        on defini un nombre de ligne a tracer

    cree une ligne
    cree des point qui donne l'info du truc

//*/



/*
// full ou oas
function draw_line(tab_val)
{
    // on trace la ligne interactive avec un tableau en entrer et des chifre et du texte ou autre;
}


function draw_pie_char(tab_val)
{

}


function draw_histograme()
{

}

//*/