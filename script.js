
$(document).ready(function () {
        holidays = [{
                date: "4/12",
                description: "Today is Yuri's night: annually, people of the world congregate every year on April 12th to commemorate Yuri Gagarin's flight in the Vostok 1 spaceship (April 12, 1961), the first Space Shuttle flight (April 12, 1981), and to promote the future of space exploration."
            }, {
                date: "3/14",
                "description": "Today is pi day. Pi day celebrates the mathematical constant pi (or π), which represents the relationship between a circle's diameter and its circumference."},
                {
                    date: "7/22",
                    description: "Today is Pi Approximation day, observed on July 22, which celebrates 22/7, the approximation of pi."
                },
                {
                    date: "10/23",
                    description: "Today is mole day. The mole is one of the most basic units of measurement in all of chemistry. Generally speaking, one mole of any substance — be it an atom like hydrogen, or a molecular compound like water — is said to comprise 6.02 x 1023 atoms or molecules of that substance. This numer is known as Avogadro's number, in recognition of Amedeo Avogadro, who conceived of the constant."
                }];

            function getHoliday() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var date = dd + "/" + mm;
                for (var i = 0; i < holidays.length; i++) {
                    if ( date == holidays[i].date) {
                        return "<p>" + holidays[i].description + "</p>";
                    }
                }      
                return " <p> No.Today is not a chemistry holiday. </p>";
             }   
        $(".description").append(getHoliday());        
    });
