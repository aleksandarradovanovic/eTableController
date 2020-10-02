const { ObjectId } = require("mongodb")


db.createCollection('event', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['event_name', 'event_type', 'event_start_date', 'event_end_date', 'event_description', 'event_place_id', 'event_image'],
            properties: {
                event_name: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                event_type: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                event_start_date: {
                    bsonType: 'date',
                    description: 'Must be a date and its required'
                },
                event_end_date: {
                    bsonType: 'date',
                    description: 'Must be a date and its required'
                },
                event_description: {
                    bsonType: 'string',
                    description: 'Must be a text and its required'
                },
                event_place_id: {
                    bsonType: 'objectId',
                    description: 'Must be a objectId and its required'
                },
                event_image:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required:['image'],
                        properties:{
                            image:{
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            },
                            image_desc:{
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            }
                        }
                    }
                },
                reservations: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'object',
                        required: ['name_reservation_under', 'user_id', 'reservation_date', 'reservation_status', 'confirmed_by', 'reservation_card'],
                        properties: {
                            name_reservation_under: {
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            },
                            user_id: {
                                bsonType: 'objectId',
                                description: 'Must be a object id and its required'
                            },
                            reservation_date: {
                                bsonType: 'date',
                                description: 'Must be a date and its required'
                            },
                            reservation_status: {
                                bsonType: 'string',
                                description: 'Must be a date and its required',
                                enum: ['CREATED', 'CONFIRMED']
                            },
                            confirmation_date: {
                                bsonType: 'date',
                                description: 'Must be a date and its required'
                            },
                            confirmed_by: {
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            },
                            reservation_card: {
                                bsonType: 'object',
                                required: ['cardType', 'number_of_guests', 'seat_table_id'],
                                properties: {
                                    cardType: {
                                        bsonType: 'string',
                                        description: 'must be a string and is required'
                                    },
                                    number_of_guests: {
                                        bsonType: 'string',
                                        description: 'must be an string and is required'
                                    },
                                    seat_table_id: {
                                        bsonType: 'objectId',
                                        description: 'must be an objectId and is required'
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }
})
 db.event.insertOne({
                event_name: 'event1',
                event_type: 'party',
                event_start_date: new Date('01/01/2021'),
                event_end_date: new Date('01/02/2021'),
                event_description: 'zurka zurka',
                event_place_id: ObjectId('5f64b37d67ae9eca1479dfd7'),
                event_image:[
                    {
                        image: "asgasgasgasgas",
                        image_desc:'Image 1'
                    }
                ],
                reservations: [{
                    name_reservation_under: 'mika',
                    user_id: ObjectId("5f64b37d67ae9eca1479dfd7"),
                    reservation_date: new Date('01/01/2021'),
                    reservation_status: 'CREATED',
                    confirmed_by: 'pera22',
                    reservation_card: {
                        cardType: 'type',
                        number_of_guests: '2',
                        seat_table_id: ObjectId('5f64aed367ae9eca1479dfd4')
                    }
                }]
            })


db.createCollection('event_place', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['place_name', 'place_address', 'place_phone', 'email', 'place_type', 'place_image'],
            properties: {
                place_name: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                place_address: {
                    bsonType: 'object',
                    required: ['country', 'city', 'street', 'longitude', 'latitude'],
                    properties: {
                        country: {
                            bsonType: 'string',
                            description: 'Must be a string and its required'
                        },
                        city: {
                            bsonType: 'string',
                            description: 'Must be a string and its required'
                        },
                        street: {
                            bsonType: 'string',
                            description: 'Must be a string and its required'
                        },
                        longitude: {
                            bsonType: 'string',
                            description: 'Must be a string and its required'
                        },
                        latitude: {
                            bsonType: 'string',
                            description: 'Must be a string and its required'
                        }
                    }
                },
                place_phone: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                place_phone_two: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                email: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                website: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                place_type: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                place_image:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required:['image'],
                        properties:{
                            image:{
                                bsonType: 'string',
                                description: 'Must be a binData and its required'
                            },
                            image_desc:{
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            }
                        }
                    }
                },
                place_rating: {
                    bsonType: 'string',
                    description: 'Must be a date and its required'
                },
                table_seats: {
                    bsonType: 'array',
                    items: {
                        bsonType: 'object',
                        required: ['seat_number', 'seat_category', 'seat_status'],
                        properties: {
                            seat_number: {
                                bsonType: 'string',
                                description: 'must be a string and is required'
                            },
                            seat_category: {
                                bsonType: 'string',
                                description: 'must be an objectid and is required'
                            },
                            seat_status: {
                                bsonType: 'string',
                                description: 'must be an objectid and is required'
                            }
                        }
                    }
                }
            }
        }
    }
})
db.event_place.insertOne({
    place_name: 'restaurant1',
    place_address:{
        country: 'srb',
        city: 'belgrade',
        street: 'street',
        longitude: '1512512',
        latitude: '6343463',
    },
    place_phone: '+12512512512',
    place_phone_two: '+12512512512',
    email: 'restaurant@gmail.com',
    website: 'www.restaurant.com',
    place_type: 'restaurant',
    place_image:[
        {
            image: "/9j/4AAQSkZJRgABAQAAAQABAAD//gAgQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3MA/9sAhAAPDw8PEA8RExMRGBoXGhgkIR4eISQ2JikmKSY2UjM8MzM8M1JIV0dCR1dIgmZaWmaCln53fpa1oqK15Nnk////AQ8PDw8QDxETExEYGhcaGCQhHh4hJDYmKSYpJjZSMzwzMzwzUkhXR0JHV0iCZlpaZoKWfnd+lrWiorXk2eT/////wgARCAKuBAADASIAAhEBAxEB/8QAGwABAQADAQEBAAAAAAAAAAAAAAECBAUGAwf/2gAIAQEAAAAA/PQIBAAAAAAAAAAAAoKAAAQAEH3EAMcAAAAAAEAAAAAACqAABACBsoECT5gAAqWBZQCSgUgAABAAtAAEAEDakCAx+YAABZQACCkoAAAAEQLQACAEDZQgDDAACygAADKQlAAAAAAiFoABAIDZhAD54qCURRtbPNgAEmQAAAAAAAkWgBAAgbMQAnzlSpQAvoOr435gAYrQAAAAAABIyABACA2YgRZPmoDa6mfN0BudfrbnD5nKgAxWgAAAAAAAxWgBABA2YECY4UBues+t+Pmfrr6e/wCi6H353I87ACS0AAAAAAACRkACAIDaiEQY4UC+n6Pku13vnXH81j6bo+L+cAJLQAAAAAAADFkAEAIDaiIQfOUDL2Gt5j1vd4XnOt6HyfI6235+AEKAAAAAAAAJLQCACA2UIgmAB9PT9XibfY8vp4eu4fnFgAigAAAAAAABJaAQAIGygkJMKBl6br7f142h6HPXeU44AIoAAAAAAAAJGQBABAbUJCRjjQNj23Jw+m9ceh8vL8jEAJLShAAAAAAAAxZAEAIBtIkhGEoH29vx/PbHuPr4La9f4vnABJapSEAAAAAAAMWQBAEAbUQklxwUC9/0el9d35+E6Xq/EaAAhVUuTCQAGWWMhYAAABiyAgAQDZQlkY4UAy6vVn06vE7Ol43AAhaq5b3d7Hx8L8IgFOtufLU1PlEAAAAxZAEAIBswETHCgAbfqfvz/Oa4Ai1bn1/Sdb63D8/4sgBfp3/qmOroa0QAAAMWQCAEAbMCDDCgALcQAuNq59X1XVzpj5DyUAF+3fzEmrzteQAAAYsgBAIA2BAYYUAAAAyi3b9Z3vpUmvxvI6UAFdTe+tIx0Of8xAAAYsgEsAgDYgB88aAAABGS5dv2G5kmHJ85xfjIoQFuzvbuYnw5eqgAAGLIBACANgFHwAAAARbfp6r0/wBbMOL5Tm4xnMQpC5zB9ehv/QYc3n42AABiyAgAgDaQq3HWoAAAItv29n3s5Od5DjSXYy+fwyz2PvnccJh8vlGU+c+vU3qY6HLhAAEjICAEAMgCQBRQASZW/f23arDzXkvlLsZ/D5/fd+mWH12fvlPjr/LDDH4fA+c3Ot9iaPKxQABIyBABADIQBAAWgItv19t3D4eL4MfTa1/ltbtz7HV3/vUHw1OVyde62pjjh9extk0OXjAADFkBABAGYgAAhC0iMqz9l6I1fB82Nn66X16Dd9J1fo+Wrr/DHP77Gx9MvnzvO6WWrpYfPLrb9Tm82QABiyCAIADMQAAAkpFtX03sE1fA883Jq7m19/U9bLW4/D5mvhC/Ta6nb6/3x5vmdfHnfH53rdEx5OjAAJGQQAQAZAIAKAkLSur776NbwPNNzHX6H27nps9fzHntUgKXd9F6P7/PzvCuh8PlexvV8uLrgASMggAgAyIAAlKDFkF+3v8AosPCcWXZz1ul9vUdrHg+R04QApeh63t3j+WnP+fxy7e2afHwABJaEAIAGQgARQURRb6n1seR8tH32NPobPrOr8fIecwQAAr6em9Z9eZ5H4858vr3vqx5WhAAkZIACABl9/vBD4fEEoKJSt39D+14/gcGe7pbuz6vsa/ieJEAACr3vabHH8praUw3e1Xx4fyACS0QAXEAff3G1At0/D/IAFEpb7H0r5fnvNmW7q/fd73pvj4fiSAFIAq9722x5jg6Gvg7W8nN5YAYrUWACADc995DSyE3PX+C0wAUY5F2/wBF+7y/jpft9Pl09v218Z5uQBaIgC30/sXi9PkPn9u/m+XC+QAxWkACABue+8P8fUfLG+V2/d+D0gAUil9X6xrfnOoy3dTofb2XR8/4jCALn9aY/PCAV9Pb+i5/jdTQxnW6ScrnADFagAlgAbnvvD/T2+OD8/8Av7vwekACkU+36LuvLePl+v1nU6Prtf8APNCALl6v3gni/GYiKrofoG75PkcZh9vQZNbh4gGK1AAgANz3/kvn7H4zPxn39h4LTgAUir1/f35fnfPl3dbpfX2e/wCY8XAC5+798HifzvGEUt9d63R8To62DtbzHh6wBiySwAgAH39zuzblurNXwnwABSKvsvSuL4GT6bGPW+nt/l+e86AFy9f+hpZ4bw2IhS9D9C2fD6PKuG527OZzAEjJAAQAGf0++ftMfp9PIafw+EAKlMbX0/Rd54rzkffPc2+36PheBxAC/TZGHx+cBKXL3XoeB5zi35Z+h+rU4kAkZIABAAzT6+n+L7eVxQACmNrd/SM/n+c89lt/Ls/P2+z4rzUABasSAJVvovcank+F8cHa3ny4PzAkZEAIAAyABAVCkmS9v3d0vzf5Mtudq+1w/N9GAAoICCl6f6Ll5LhaEx6HXuPE1QJGUAJUAAyACAApFX1XrLxPAy57n06e36v4fmPxAC9HQxZ/T4beeliALsfpv2815/kfT5bPes5GgBJbABAADIAQABUVl7T0N8v46Ppu7m10vS6H5piAHQ/SfCcJ6D5dnofP6fn3zCFuX6XvcPzXE+nx+nos5zeWBioARYABkAEABSKy972L43zEv12upev6LkfnmIAvss9vwE9rwvWfnuPqeBqEKW/onV4/m+D9dfL0X1aHHAxUsAQAAyAEAAVjay/Q+k8P5+X7bHX+fd7/ABvz7EAfX9O8l6z881facbreKEIKZfoPZ43nOBn8b6DYafEAxUAEAAMggAgChWf6Lv3wXDl+m11/n3PQ8f8AO4APRej43T0uPvcn2/51Pa+Y5yFFv6H1uN57z/21ne22rw4EigAQABRFEAADIz/Rd94Tgr9tnrfLr+m535tiAPd+Z5e1+hcbzej7Tq4YfnuEoFy/Sd/h+f4P0+DvbbV4QRFASywAAyEFgACsWRn+idC+F4Eue52Nfo+t1vzH5ACwzy+cu1np4oFL9v0778LzvC++te9tNThgkUAEAAMggAAKxtMv0HqvFebj7bfT+Wx7bH810AAABKQpel+juH5rj/T4X0Gw0uKCRQIAAAyEAAAJaZe67uPlfIxnvbX1+Xutnw/mwAAAgUZek9tr8Xy2jML6L6tDjhIUBAAAMhAAACVV9h6nDheEjPc+23r+q7nH/PIAAARZUpl+gdvQ4PlMvjh9fRZOXzCEUBAAAGQgAAFgq+i9vjofm+C/bd2NX0fqJ+bc4AAAEFXe/S7xvPee+3wbPes4+iQigEAAAyCAAABV6X6M+P5rqme9Pn2/W7PmPFAAAASjL2fp9Xg+f5v21p0+rceD8CEUCAAAGQgAACUp9v0zY+fhOHGe5g3/AE/b+X5vogAACKLv/pH05fnfOfT4R2918vP4kIoSoAAAyCAAAiisvd975+d8TFz3deep9Dt8XwGIAAEoGfv+1q8HgcrZ1Z9PRZtLikEUBAAAGQQAAEWLV9F7jHU/NviZb2rOh6P0bynkJQAAlBl6r1+PG8/wfr8/k3+0nI0ECKIAAAD6YggAAixVbX6V9sPD+fi57Wq9F3uzPB8GUAAAX0HuMuX5/h6v31pe7tzHgfKBCkqAAAD7fMSkAASpSsvb+hw5X59gZfaYZ+h9PvfLwfFigAlBe97nPR4vnubsfP4tnv1o8YgiggAAAbHxABACLClvT/RGH5/yC5bOvPv1/X73y8Z5zEUAAvpPaZaPP8zyc3yOzvseJqkEUCAAAD64AAghUWKKy952bw/CYFy2deffpez38eD43VhZQRTb9h6BzNPz3Gn0+WLZ72TU4kgIoQAAAGQAEIVCgK6n6Dn8/C8MZZbOtj9ul6rs3X8x5vWSgDZ9J6f7zzHL1uXj9vjJe5uMeJqwEKEAAABkABICxRFKy9n6Nzvz74QueXzZ9Duen+0+HE4Whq4xWWz0u92fvNDymjr6k+3xh0OxWhx0BFEsAAABmgCIBYAKVs/om3POeMwFKu30e/3Pok+Or8o++39LZreb43w1flFR9+99Hx4XzgEKQAAABmgQgAACiu57rLDx3moLLcplu73a625kLCfPmcfk6+r85AuXd2WPH0QCKQAAAAyIIAAAsFVfX+ofHxHCAXKvpsfbZ6G3s5XH5a2nzflrfHGIC9nfTncqAIVAAAABlAgAAABS/T3Xaav5/wA8AuVZS/X6/TJ8/h8pGMgDLu7LU42ABCoAAAAMoEAAAAFLse96fP8AAagAVVUDGQAH37OPG+YAhUAAAAFBAAAAApdr1Pm+fAABbbZjiAAXJiAEWAAAAAoIAAAACgQAAAAABQAIVAAAAAoQAAAALFBAAAAAAKAIWFQAAAAKQAAAAsAqVKgAAAABQCLFhSAAAACgEAAAAAAAAAAAUAEWCoAAAACgIAAAAALAAAAAKAEsAKgAAAAKBAAAAAAAAAAAUlABLLCyoAAAAKAgAAAAAAAAACpQShBYCwAAAACggAAAAAAAAFIWWFIoCLAAAAAACgWEAAAAAAAAKlIqUACAAAAAAAoAgAAAAACwAFEWAqUCAAsAAAAAygCAACwAAAAAFEUSkoCAAAAAAAZQEAAAAAAAAAqFhZQCAAAAAAACggAAAAAAAAFCABUAAAAAAAAoAgAAAAAAAAqWLLAsBYAAAAAAAygUkAAAAAAAACoKgAAAAAAAABQBAAAAAAAACwFQBYAAAAAAABlACAAAAAAAACwFQAAAAAAAAAyQJYAAAAAAAAKQAAAAAAAAAAZQQAoEAAAAAABSAAAAAAAAAAP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQQFAwL/2gAIAQIQAAAAgkAAAAAABATCQDySJAAAAAABBMJAPJIkA9T4A9x5AABCSAkA8pCR678PPq96o8wAQkQkICRCQDySSGp46+KliaXMAAQJCATAJA8kkidXj1p2s+eYlAAhMJCATBIA8kkwm/19T7oVBIEAQEwAJQSAeSQTc69a/bO8CQn3zgQAACUEgHkkEu/u5woCR0u9/WbXIMybFiQASgkA8pAkBLp4XrXhNKqHnO5vVqyJgEoJAPMgSAkn1pyivW8+AiOdau63vQBKCQDzIkAJOmpE1qndW8+/UufOJ8UuPu/0ASgkAgkAEnrWRn+bVL1b7ITMVKcTTq+9D2BKCQCAASkanRmeu1O9341+PmJ697LO4TUqddCQShIAhIAJLd+M3xZqaPqjwgD3dsUaijXt2wSgkAs2BU4gJTrzTp3qGnOdzIEi7aoVozfOl7CQAGjTs+eXeiAlcu+cmzxsWs3nCHh6mRodsrzXo2boSAA0a+l4zu9EBLW90atupq1aaEVcuemyk9alWkzI05EgALFi0q1eICfeuxuk+7uVCDjQdb6ResZCnVv9yQABNiK4BK1f5Zdyhq+c9AgkDto53DlnWrgmEgBAJAlet1aF7N2qlMPVir36KsCdanTjL66BKEgBAJAlo2KdK/m7FSrAt96Fzlw8wJ1atKcr1pEgAEJAEml3o1L+bsVKsC9y71u6n5E61Sj6y2mSAAQCQSaPenT0Mjb4UoBMTPkPWtQqestpkgAEAkCV+zWoX8vV95iAAFm/lcpyumiSAAQEgSW7vLM7evV3N4ghIGj1x3nMs3ZAACASCTpqTjzdpanLOQQkDvoUqfqrSvWEgACAJBKdX3nV7XPrcp1IAD3pTkefedy0/SQAAgCQJu2+eXNupesU6iAHvR95nGeed2vpAABAJAT61vWZw9Waly1yp8kJTZt+aHFOfw0esgAAgEgErd6MiPTzYue+XHxHrp3V6fmJr0LF5IAAIEgAlp9uWWE2LHSUeeFbwhzzp0vQAACCQAJetTrl8AJ9REEDlQv9QAACCQAEvdioiSAAESAAAIJAAJCAAAAAAAgSAAAAAAAAACBIAAAAAAAAAIEgAAAAAAAAAgJAAAAAAAAACBIAAAAAAAAAICQAAAAAAAAAgJAAAAAAAAACBIAAAAAAAAAP/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEFAgQGA//aAAgBAxAAAADOCCAAAAAABIABD1hBEAAARIABAEgAQ9YQRABjj6AQkAAAhIAIe2MCIGOrs54Vfhc+oRIAAAISAEPWEGIiijx97Ku8rv3AAAAAiQBB7YwMRHO7ehb115j7gAAAAAAQe2KEQKuuxa13agAAAACEgEHtihECt1Nfa8bv2AISBlEAAISAQesIRAjU8arZvZAjVptTq85Qy7bGop/EAEJAQPWIMQEJGMvDn6bHe6/1E5dpuT4UNJgAISAgeiEQAAhV8z43F5tzIM9u8tsq/ltYAhICB6QhEEgCKTm93ptvF6ZHjGfrlGz02/r8lpAISAQZIEASEU3NXPRZYevlUVnnMYY71zZ5R0l34cfqAQkAgyIAEJRoclc9CjOlo7K13M0a9bT59Ttuhv8AR47zBCQEDJAAB5chs9ROGfM6XT7sgjChpurs3VW1BzYISAgatahY7oAijqOr2PP15vR6z2AEU9B127l23rxemESBAKXf1Z26q/AHjy1rc45VvNdhsDL3YeIih0usyuOppOXCJAgFLt87PS1l+AKio6f2wz425ug28I9tXAYchf2rucuH8hEgIDVrKvC0s94Ajl9u9hqcz1+cj39kakBSaHWOivuSqhEgIDPHQb0gEYcf0Vjh78z59OBJANXk+v2t7saLmhEggDOEAA1eS6za8tnirW9DCutNTWxtZGPDdXaO9ruPISAgM4QACv5jsPbz9+GvrkKvQv6jY3PWZI4jpLjz7zy4mEJAgGSBAEqzm+x9cPfh7u6Cj29GzrIvPQRwvUXHl3Lh4QkEAZIAArOY7P289zitzoghExGYeXDdfa+PdY8RCEggDOIAES0uO7Pa89rnKrspAAK7le22/PvdPjCJAgDOEAA8eG6m1idLjuy3QADlsOvz9e3puWIkCAM4gAhLHjN/pXnly8dWkAGhyvUXHjddPzFIRIQAZEAIDnqjtPTGdHk769kAPDjt/qvfX7Lf4fWIkCAGSAANXi+ptGGdRzPR3UgHhybrd3y2+1reQhCQgAmUAQkRzeHS5Imr5ew6PZkMajn7K/3Mcevs+OriEgQBnBAAHhzdvZhq85W7+/75eWrXet/Z5ZYXHV0/KiEggBnCAICSuqbndCNKq0fB67dpY5jc7LDi/ERIIAMoAgAKnWvcgIxnIBYdVymiISBADJBASIkR5eoAAEzAQkCAGUEEgAEAAAkCJCAAygAAAEAASBBIEAGSAAhIAgAJAEJCAAyQAACCQAAAhKAAGUAAEAkAAAIAAAyQABACQAACBIQAGSAAIAJAAAQkQAAyQABAASABAAAAGSAEBKCUAkABAAAA/8QAPxAAAgIBAgQCBwUHBAIBBQAAAQIAAwQFERASITETUSAiMDJBYGEUQFBScQYjMzRCcoEVU2KRQ1ShFiREkKD/2gAIAQEAAT8A2m02m02m02m02m02m02m3yXv+EbTabTabTabTabTabTabQiH5Q3/AA8w/P7fg20I+WW/Bz8st90x8c2mW4RRd4Rt9wDH5aP3PaaSgMyq1FbSweu3zUfZU4z2HoJXpZI6xtKmRhvV6ONjm0xNLUiYeIKZdRzKRH0tSSZk4Ph77Q9D8zn2WJjm5xKMZK1HSPbWncyq2uzsZmUKyHpBg2M56T/THlmDanwjKVOxmFeqHYxMunYesJj3I/Yy21QI2XT19YTNyayDsYTuT8zt7ETS6QE5pk3imsmX5VlrnqdppKt3MZOYRa0Wc1cNSPM3TwQSBHUoxEDHzmkMSJmttU0d25j1MJJ+PzQ3sV7iadt4ImrBvDO0+M0lR4cZQFmo5hpXYd59tv335zMHUmLBXh2sSanTyPvwwMoVdCZl5qtWQDD8hj8GPsVViegmmMwUKZdQtq7ES7SupKzBBx/VaWXqUmbRZkW9BDptvlFxLkcHaYu/hDeaxttx3Pzki8xAmDgrygkRaEXtEI+MKptM3ZdysxbrbG2aVULtGoWGpPKMyos1S8WPyj5sPscYb2rKRtWP0mZqL0WbARNYHxh1hT0EoU5K7mW44p9YCV6lWp5S0ryFtHQy/mUEiZefduUjMWO5+RT+Dn2NLctin6zGcPUJqeIX9YCFGU7TGpaywDaYaciKJlbFDMvpe007IdbVXeN61c1JQLz82GH2WmZoXZGM2S1Y+n1Od9pTh11ddorAGZLeoTMg89zn6zTMZmsDER/Vr/xNQfnyG+67QIx+EKMO49uAT2nht5TY/Ipg9irEHoZj6nZVsG6iJrFRHUyzV6tukwcw3v1l9fOhEXShz7mUUJSs1HLWqs9Y7FmJPx+5qpPYSjT77iNkMx9A+NhlWl4tY9zeZel0WVtyrsZfWarGU/A+y39DGoHKCZ4S+UfGQx8M/CPS6/CEfIJ9vi5JocGUalUyjdoc6kf1CZOrIoIU7mX5D3tux+5LWzdhMXSL7tiRsJjaPj1bFhuYlaoNlUCbcGE1mnwspj5+1rG7CVLso9BkBlmKrSzGZYQR+Pt9w3InO3n7Tb0lUntMPSrryPV2ExdKooA3G5ioB2G029Bp+0XL6kPtKNvFEXsPSKgy3GVpZQyQj8db74PR2mPiW3sAqzB0ZKwGtiIqgBRsIBt6BaW5NNQ3exVmTr+NXuK93MzMyzLsLv7UHYgynNA2DRL0fsRNx6TIDLsUHqI9ZT8cb8AVSZgaVZeQWGyzGw6sdQEWbcdxGcAbk7TK1jEx9xz8zeQmVr2TbuK/UEsvttJLOTN/uAYjtK8qxPjK81D73SK6t2PpWUq4l2OU7D8R2m02m02m05ZyzlnL0jd/v6Vs52Amm6P2stERFUBVGw47wvt3O0zdZx8bcKed5l6rlZJ6vsvkIWJ7+gEY9hCCvpbTabegNvjAgPYw1sOKWuh6GVZoPR4jqw3B9FkDCX43xAhBH4fuJuJuJuJvN5uJvOYRmEPf79TS1rBQJpulLSoewdYBxJmZqFGIpLt18pm6xfkkhSVSEk8djFoYjc9BN6K/+Rj3s3QAAcNotTt2UxcG5v6YNPI95wIMTHHe0TwMT/cENGL8LJ9no+FghxV+DiHEf4bGNjuO6mGswoYGdYHVujCGsf0mEEcK7XrO6mUZiv0boYCD6BUGZGNv1EZSp2P4dvNzN5uZuZzGbmbmcxm5+/U0va4UCabpiUKHcetBw3jOFBLHYTUdbVN66Op85bc9zFnYk8dpVST1PQQ2VVe4OY+ce17O5gErx7LOyxcEL1tcLAcWv3ULmePZ2VVWfv37uTFwr3/ocxNJyT/4YNGyf9sT/RMj8iw6Jf8A7YjaReP/ABGNgXJ8HENeQn9W8Jf+urectDeamNjeXWNQYa2Wc3wYQoD7s6jhRlNWdj1ErtWwbg+gRvMjHDDcCMpU7H5TqqaxgoE0vTVoUO49bhvN5ffXQhZ2Ampaw+QSlZ2SE8URnOwEK1Ugc/VvKWXO/wCnlAJTi2WHoOkWrGo9487eQhyLG6IAglOHfeeiM0p0K1vfYCVaNi19xuYmLRX7tYgVR2Xgd51mxhJhHTqI9FL+9WplmmYr9gVmRorDcrswlmBdV25lhd16WJv9YErs90/4lmNGqdDNwehjKRwrtas7iUZK2Dv19AjeZGPzDcRlKnY/IO33BFLEATSdNCAWOPQysurGrLMZn6jblv32Ty9CikufpHuSoFau/nCST1ldLuegi01U9X6nyjW2P6o9UeQmLpWTfseXlXzMxdGx6diw5mioiDZV4EgfGNkUr3YR9Sx1/qja1jLDr1E/1+mDXaIusY7RNQob+qLdU/ZhAODKrb7gGX6XTZuU9UzK0uypiQCPqIXsr6WruPOFEcbqdxLMYHciMrVnY9oVBG44KxU7iY2UHAVu/oEbzJo+IhGx+TwN5o+neIRY46CABRsOOXl141ZZjM7Osy7CSenwHoVUAjmbostv6cidFneU4xbq3QQuFHLWNh5zFwb8lvUB/UzD0mjH2L+s8Gw6AT9Zbl01DqwmRrlae7L9cufcLHz8h+7w22N3Yzc+foBm84t9q9nMr1LJr+O8o11h728xtYrfuwlWTRZ2abRgD0IBmTptVwJToZkYNuO5KjaLYHOxHK8dFfoR1ltLVncQgND0gJBmLlBtlbv6DKCJk0cp3HyfpuG2RaOnSVVLTWEUccnISissx7CZ+e+XYevq8RKaAfWbool9/P6q9FEAJlOOFHM8Ys5A/wCgJgaObNnu6L5SuuupQqKAJ3l+XTQvVhvM3XCdwkuzLrSd2hJ9oCR2Moz76iOu8w9b32BMpyqrgNj14WVpYvKy7iZ+lbAsnUQ81Z5LP8NDsejf4Muoas7iHZx9Z2gJB3HeYuTzjlPf0LEDAy6oo3ybTU1rhRNOxFxqR06njZYtaFiZquoNk2FVPqDiBKaSzdegEyLgfUT3RACTKaRWAzd/gIFe1woG7Gafpa0gWWjd+DMqDdjsJn6ytYIQzIzbbyep+5Y2oW0kbkkTB1ZbAAx3EVlcbqdxwztNSxSyD/Esrag8rjdZ022bqJdUUbcQgOPrwVip3ExrxYv19DIqDrGUqSPkQ+mJomDufFYcSdhvNa1IkmlD6FKF3AEvtCjw0gBJlFIRedoqvY4CjdjNO05MZQ7DdzwuvroXdjNR1dnJVTHdnO7Hc/dK7HrbdTtNO1YggEym5L13U9fLhnYK3KWUdfiJbWaGKsPVJ/6jr02MYFG3jAMNxwqsNbgiVWCxQRxI3EyqdjuPwqvHss7CfYb/AMpn2G/8pn2G/wDIZ9hv/IZ9hv8AyGfYb/yGfYb/AMhhwb/yGPTZX3X7ifTw6DfcqgTGpWmpVHATVc4Y9J2PUx3Z2LE9TxRSTGIx69h75nUmY9I99u03LsNh+gmmaeKVFlnvHhk5KY6Env5TUNSa1iFMJ+7AkTTtSZGVWbYzHyUvT68NSwRahdR+ohUo3ht2+Bl1c90xl4Yl/I3Ke0B3HG1OZTLUKMR99O2529nSnPYo+sw8StKx0hFI8ptR9JtR9JtT9JtT9JtT9Jy0/SBKT5TMwq3rPSXV+HYy+R+4H0h1mh4my+Kwh4XWCtCSewmpZZyb2O/QcQN5SvIpsbsO0Zi7EmUVF2EYjsOwmkYG58ewfpwyL1oTf4zUtQax2RW/U/etN1BkZVZusx71uTf4zbearggbso6GAcwKt7wl9XKYDv0hG03mJdzrse/EzLq6c34Ri/xk/WL0pH6TPy70vYB59tyfzmfa8r85gzMo9nM+25W/vmHNyh3cz7fk/nMw83Ia9AXh61f4md/Mv9wPpYdJuuVZj1CqpVA465m8q+Ep7w8al5mAmQ4JCDssRdzEXw02+JmBinJvA/pERAiBR8I7rWhYzVtRYkqp6mb+02m3tQSJpWeegJ9YSuxbFDCXVrahUzPxnotJA7R1FqbiOpVoeo34U2eG4MRgyg8bU5lMtTkYj8Hxf4yfrF/gial/MtMWk22qsbTE8LtMXTF2bcRtMXxwdpmaaoqOwjDYkTB/mE/WH+F/iZ38y/3A+iJoWLuTYRxybhVUzGZd5vudzxWLtVWz/E9BAN5j1/EwhmYAdyZpuIMahfM8NWzgiGO7OxYncn2YUmClvKeE3lPCbynhN5Q1N5QqR7Ouxq3Dqeoml5ocKd+hm8z8YXVEgesIB4VpQ9j2mXVsdxFOx2hGx4YVu45TxMzK9uv4Pifxk/WL/BH6TUf5lppbBchQYzDw5Q6kEiF18XaZjgVNLiGtYjzmD/MJD/Bmd/Mv9wPo1IXdR9ZgUCnHQcdey+VPDB9BEJYATIbdgg7LKk5iIAAAv/c0rG8e82HssA2EyreSvYdzM/J8e87H1R0HsxP2b0+jLvfxV3AEGj6d/wCus/0fTv8A11n+j6d/66z/AEfTv/XWHRtNP/44n7TaZj4Zqaldg0I9np+T4NoBPqmYd4trAPcToRtNWxORyR+ojfvad442JjdQDwofksBiHcA8b05kMYbE/g2J/HT9Yo3pH6TOwrnvYhZjYd9dyMVnKWqH6TGQqWEsrItBmTWbKiPpLNPvDn1Zh4dy3qSsbpV/iZ38w/3XSKPFyFgGwA4XOEQn6TUbzdkMeIlOyqz+Qg6mYybKWMYnbb4sZp2OKMdB8eGtZhrqbY+s/Qe0Wfsh/Eu9L9sPcx43tNHy91Xc9R0MB3AM1GjxaDt3Eq9W16z8Zkpsxi+UPfhh2c1e3xHFhuDMhOV/wap+R1P1mDnVWVAbiE0Hyg8D6RChWL4YaOK95shWMtO/wm1I8pl5VaVnrL7PEtZvM/dBNAo2Q2EcdXyPCoaE7kniF3lnqVIvn1lSbkQryqqTBq8fMHksrHqy+zlXYdzNTyPHymI91eg9oJ+y+ZVRkstjbcwgyccj+Ks+1Y/+6s+143+6s+1Y/wDurDmYw72rP2szKLjSlbhthD7TTrvCyFB7N0mJaHrAPcRhupEz6DTkFh8DMtAQGHxE7GOOu/DDs5bNvODgZmJ8fwdLXT3WIn23I/OYmZkswHOZiFhQCx67RHZryN5kWHoAZzlau/wmbqF4vYI/QT/UMn/cMsyLbfecn7qg3YCabUKsVOB7TXb+ZwnoVDdgJceaw/TpMSvdxHbq7eXSaFj/ALtrSPeM6bTVMjwaLW+O2w/Uwnf2quVPQwZd238Rp9qu/wBwz7Vb+cw5V3+40OTb+cxnLdz7UEg7zScjxEQ+Y4avRvs/n0hXmoZT3UxxsZ3Tgh5WBlTcyg8cld0MPQ/hFTBHU/WLqdS095jaknOxJlupobl69JkapWKiA0di7Fj8fu+FX4l6D6xF5a1X6cLTshM1GzxMl+IlIAJbyEXq0xl5Ki0cE1gfmMwqhTi1r9J8DNev3NdQ/U/cN5v9x0O7YskU7qJn18+O/mOsKbWkfB1l68rsInUEQ9OGE+9e3GwbqZaNnPyJotfPlKeOc/JQ5+ktbmsY/XiBK+lLnzO0qXdow5McDzlSc+Vj1/WDoAJadqn/AEmouXy7Nz26fgWkvy5aDzlJ/diOOZWHmJkryhG/K+0z02tMrOziP7x4YLbMRxbtMldn+RP2er9dm461ZyYzQ8Uh6Ur9TMVN2Ev71JNNXn1En8o4ZJ5aWMubnsdvMn2q6VmtWHFJ2jKVJUjYjjXW9rhUG7GX412OQtqFTNt5Vg5do3SljH0zNQbmh4ysp2I29pivyX1N5MJjn1IZnJ/Mr5HeZ43VG8xPiJaNjwxW2tWDgZmDr8hiaAm1LHjr77VgegAY/REH/GYSS3rkoPITRhvkZDcNSblxLT/xMPtNNxzk5VaRVrQKn0mu4vgZRcDo/HQKOe9rD2UTWrfGzeQf0gCaVpFdaC24bsZkapg4h5C258hKdewbXCHdZqOl0ZlRdAA+3QiW1tU7Iw2IPs1OzA/WYD89CH/iIZnD99b9a5lDfGQ+UPeWHt+nCo7OsTsOOaOnyGJoi7Yg4/tA/rqPQQy49UH/ABEwh6sJ3yz9BNCHS8/8uGsnbCs/SH2n7OYmyveZmal4eq0oD6q9D/ma3jDIwy47p146RUMfAa0/GYCfa9SBb4sTNVyTi4bFe56CMxZiSdyeGn68uPjCu1SSO0zcgZOTZaF2DHt7MTSG3xa/7eGf/HX6oZeN8Rvo0McDw1PBe4lR3ReOYPU9r2/Fl7iaSNsNOOvH9+PQVd9pf76/2iYfuCJ/NPNC/hXf38Nb/knh9nTWbbUQfE7THo+z4q1oOoWW6HqNtz2nl3LbzHqsOKtdw9bl2M1DG+zZVlf16SlC9iqPiZqTfZdMCDuQFmgfzp/tn7Rg/Zk/v+4aJ/KJ+nDUP5iv+0y7+Ws/ujd43uLwExjvUvHK9ww/IS9xNM/k6+B7TXf5n0FbaXe+n9gmH2ET+aeaEfUvH/PhrI3wrIfZ6BieNkm0jok1XVfsBrCqGLT/AOp7f9gTTNa+23GpkC9J+0mJuqXj9DNFo8bMU7dF6z9o7t7KqvIbmaXeKM2pj232M1TF+1YbBe/cRkKsVIIIgUk7CaXo9BxQ2RVuzTVKaaMy2un3R7MTRhtiJ+nDP/mE/sl/8rZ/dD3jfw144n8JeOT/AAzD8hL3E0z+Tq467/NegoBl3eo+aTDB2WDpmmaGdr8lOGprzYln6GHufZ6HbiU4QPiqGPeatljLzLHB3QdBww8g42RXYPgZktj5eGw8RSGSfs9SiV3WbjvNSv8AHzbn36b7CA7TR9ardFoyG2YdjMjTMHL9ZkG/mJRo+DjtzCvc+ZmparRh1MqEG09gJY7WOzMdyTufZjuJpycuJX+g4Zx/+5b6JMk7Yh+rGGODyJxxP4S8cn3DD3+Ql7iaWd8OqGfCa8NskegN5Z1qpb9RMLqglx5cxTNLfk1KxfzDhlLzUWD6S1eV2HkT7Pf0OdgNuYxLrUBCuwB8jxBleblVDZLnH+Y+o5rjY3vCxY7k+0pXmtQeZExl5KEHDK/89kzjtjVCHvLT0UfTji/wl45X8M/Ia9xNHO+EkPD9oV/eqfQUid8b+15gN6u0zvVtRpVZ4efjWee0EccysPMTUa/DyrB9fwLS6/EzKxF6KBGOwJ8hM88uKPNjNTO3hp5LAN2Alw2bgO8xxtUvHLPqH5DE0F98QiHtBP2hToregsxt2ruQ/Fd/+pgt1Imd1QHyjtvRVZ8UMxbfFoqfzUcNfo5Lw/4F+z1HNa1nDJbaojzO01Bua2moTUX5sh/p0lXviO25PBerCVDZF45p9T5DE/Z5/VsWfDhrtfNjEw8VMxbALV37HpKia7yvkSJf6yGY/r1WVzQ7ebGNZ7oeGsYn2jFYjusPf8AE0TG8LGU7d4RL25rkT8o3MssDX3W/BQZa3M7N5mUjoxj9+FQ3dRFGwHHNPYfImgWcuSV8xB2hmoV+Ji2D6RhsSOIi+8DLztYlg7OBC3MspfkuH6zAtGNlhT7tvAjdSD8ZqeMcfKdfgT+AYGOcjJRZUgrrVR5QnbeWWhab7/ix2WZT+FifWwwmdVqA8+OIvNaIOBmYd3+RNLt8PLqP1ixpavNWw+kzK/DyLF+voBov73FYfFDv/iVvusfo28qJvxAy+/Wd5i3C6it/McP2gxS6C0D8A0DD5UNrDvDMpyK+Qd26TObd68dew7zUrg1vKOyjaKOZgJaw7eXTjgL1Y8W7TIbew/IlLFXU/WYlniUVN5qI085rdHh5Jbz9ATFcK4B7N0P+YwNNrIfgY/UTS8kVXcre60wbDTdZR8CeZYOo3l9K3VMh+ImfitjXspHT79gYrZV6rt0lFQqrVBD5yy0b2XMfVUdI1pC3ZDdz2ljFmJlKdGbyjd+OGnLWONzbIY53Y/Igmh3+JihfivAzX8fno5/L0QSNpf8Avaku+I9VoDuIrFW3lFpyMdLUP7yuYeSl9QYQzWMAZNJdR64joUYgjqPviKXYKO5mj4AxqQzD1jwyrSAEXu01G33MdP8AMz7h6tS9lncx2CKqD/MJ34VrzOBK15VA45b7JD8i6Bkcl5Q9mg7QzLqF1Dr9JfWarWU/A+gDKLF6o3ZxsYymtyp+BhmnZZx7h+U9DK3GJkK4P7m2AggEeXDWtJ6G+kfqIQfvQE0TS9yL7R+k+gjuqKWY9BLL+RXyH/RRHuKq9z+83aOxZiSZQvUuewlh3JPHCr5n39DNfdtvwYjb8AxbTVcjg9jMe0WVo47EQzvvNdxfCu8QDo3oCDvLf3tYf+pejcN9jNPyVyKTjWn+wzTsognGtPrr2PmOBAIIPaaxppx7TYg9Q/etI0pshxZYPUEVFRQq9hwvsN9nIp/dr3PnMu/x7eUH92kyr/EbYdh2gBY7S3dFCCHgJiV8lY4udlJlrczk/gz/AIAJoWV4lBqJ6rO44ati+PjN5iMCpI9AGV2cj+Y+MtTkbp7p7cK3ZGBB2iZP2itbF/jJMHLGTUD/AFDuOF1KXIUcbgzU9LfFclRun3jStJfJYWWDZJXWlSBEGwHDJuZ28Co+sfePlM+8VKMarv2YzJuCDw1P6wmVbIOZv8Sx+Y8cavnsAijYDjl2cq7Q/gz/AIDpeUcfJQ/AnrEYEAjsYYyhlIM1XFNGQx26H0BBEIdfDJ/tPkYQVJB78KL2qcERMt6nF9J/uEws2rLqDqevxHC2pLUKONxNT0V6ibKhusKlTsfugUk7ATS9He0h7R0ldaVIFUbDhk5XKwpq62N/8TLvTBq5EPNc8vt8EHc72N3hJJJlacx3PaWHc/TiJhVcqcx7nix2EyrOdz+Ds34Cp2ImjZnj44Qn1lh4axiC6kkDqIylSQfQE+MI8Zf+YH/YhBHCm4oZj3vjuLqD0+ImFn1ZdYKnZviOBAIII3E1DRa7wXq6GZGHdjsQ6n7lj4d2QwCKZp+iV0gPb1MACjYDYcMrOPP4FHWw/wDxLrq9OrIB58hpfeay1lh5rWjuzsSTEUudhHbl9Ve3oY1XiWCKAABxyreRDCdz8k6ZlnGyFO/Q94jB1DDsRBLEDqQZq2EabS4HQ+kGKkEQ7WAsB1+Ih4VXNWehlNrKwtoPKw7iYGrV5ACWerZAeF+NTepDoDM3QO7Uy7FupJ5lPtqcW647IhmFoHZrpRjU44ARAODMqqWY7ATP1kuTTi/5aV3tjj1DvY3cy3I8Mlieawx3Z2JJ3MVSx2ELBByrN+IG5mLTyJ9TxY7CZNvO/wAlCaHn86eC56jtxz8Vb6mG0yKGpsZT6SuV2IjsG6gbHijsh3BiXJbtueV/OYerXUbJf6yfmlN9Vyhq3BHG3GpuBDoJk6BVZua5fomTX2Es0/Lr70tDWy91Imx47TYwIx7KYmBlP2qaUaFk2d+kxtBoq6v1lWPRV7iAQ8MzUMfEUl29b4KJlZ+Tnn8lXlC6p0T/ACY9/L0Xv8TCSeHOFXYd/Rw6OY8xg45d3KNhD8l417UWq6nsZh5K5NKuDwImr6eLVLqOsZSpIPsAeNWUyeq3VfIzHvZTz49pU/lMxdZUkJkLyHziWJYAVYEcNuBHmI+Njv71Sn/EbSsBu9Ah0TTj/wCIz/QdO/IYND04f+KJpWAnahYuPQnu1IP0E2XyHoZGbj4672WCZWt337pjLyjzjAKS9r8zSy/f6DyjWE+woqNjAStAigDjbYEUmWuXYn5N0jPOPaEY+oYrB1DA8HQMCDNX00qTYghHsAZ+nBWIleW4GzjnWY+Tynei8ofIynWLk/j1bj8yynUcS4eraP0MDqexB9k91VY3d1H6mX6ziVdFJc/SX6rnX7isCtZYUDc1thdo+UdtkHKIXJhPsEQuQBMekVqPPixAEyruc7D5OB2mi6luBTYYIZbUtilSJqmnNS5dR09jvOYHvwBIgYfGJdanuWb/AEgy1P8AErH6iVZQH8O9lleo5q9rEeJrGQPfxt/0g1qn+qqwT/W8P/n/ANT/AFrD82/6h1zE+Acx9cX+jHcx9YzG9ygLLNQz2B5rwsd0JJstZzDlovuII+RY/wDVCT7IdZi0BBue8HAmZV+w2EJ+T63atgynYiaVqK5NYVj6445FCWoQRM+haLSB7LeBuG+05jNxAxHYmLk3L2cxc7IH9cGoXfSHUbPJYdSt8ljZ95+MbJubu5hZz8ZsZ0m4m/slOxBmPYrINuOReEBjMWO5+Uce96LA6nbaadnplVjr63DOy0x6ySZl5BvtLe13m/obGbGbGcpmxnWbmb+2qtasyq9XUHeXZCoveWWFzuflPFyrMewOhia/UauveZ2dZlWEk9PuW85jOczxDPEMNjTmP3FXI7GFif8A+rPb/wDX1//EADURAAIBAgQDBQgDAAEFAAAAAAECAAMRBBIhMRBBUSAyUGFxExQiMDNAQlIjgZEkU2BykKH/2gAIAQIBAT8A/wC2QD4uql2AA1Mem1M2b5CECMbnxFVZjYC5nutW3KMrIbEa8EUuwA3lCg9N8xIlei1Qixj02pmx8ZpKtKlc7kXMpV2qPa1hHpK7Atyhw9JthGV8O4IlGu1R7EASvXamwAEqVGqG58YFyYy+0pW2uJQpNTc3GhEr5ytk3MVa6MDYzEi9ImI5RriO5qNc+M4RRZmtPeKdyCbEQOtS4UwMtMAM2vUy+l95Xr5/hA9fG8LUCkqee0qYYO1wbEylSFJbXuTMWe6JhwRS1jkF29T8oKTPZVLXym3yLjr4Steov5XiYhs4LnSE0WIY2MrYhbFUPyUps5sBcxMIBrUa3kIPZp3EHqYKjX3mKTJVaw0Oo7R2juSx1i1XXnExA5iKwOx8ORQQbwwAmUsLoGc2EDKgsi2EueFuZ0HUzFVFdwF1CgC/aIuCI9J1O3FWZdjKdcHRoCCPDLmIjOQALkynRSiLnVoWJOpljGKJ3m/qPiuSrbzjO77kkwow1KkDt3Eakjco+HYbaiEEcEqskRww0+4tLS0tLfPp02dgoFyYiLRWy78zwtYXOg6ypibaU/8AYSzGLh7KGqNlENemn0k1/ZpUrM5u7XgDt3UJgw1duYE9yqc6k9yf/qQ4SqNmBjUay/hf0h6Ef7LdDLx6SONtesqUmT04I5U6SnUDjz8JRSxAAuTEQUUyjvHc8GZUXM39CVa7VD0A2EpU2quABC9PDgqtmfmY9Rna7MSTEoVH30ETD005XM9BNTNOolx+w4XMKo4syAx8GDrTax6GMHQ5XW0HlNDKtC2q7cEcqbiI4ceDiYekKSZyPibbgzLTXM39CVarVGJJlGi1U6f3K1ZUHs6XoWiqzmy/7KVBU31PB61NOdzGxLnbQQ1HO7Ey8vAxHOLXqLzv6xcSp7y28xFIOqm4jBXFnFxK2Gan8SG6wa8K9G3xLwpuUaAhgCPBsLSzvdu6uphNyTNACxNgN5Wqmo1ztyEpoXdVA3laotJTSpn/AMjERqjWG3MxEWmoAEZlUXJtKldm0Gg+SrshuDaUq6vodDwxGHtd0HqJvN5WpZDcbHhQqfiftaFAVQSTYCe60+pnutP9jPdKf7Ge6U/2MrUjSbe4PywCTaKgp01T+zBqbTFVdRTU6DeAEmXGHojT+RtuoEALsBzMpoKagDeO6otzHqNUa5+ZQr3sjn0MvaYij7Ns691p5xlDKQY6lWIgJBlNsyg/aYX6LesGdnyhjcme71c1s5tbeGjVCM2c6Sk7Gol2O4mN3T5eEp5nzHZdYTckx39lSZuZ0EJuZhqdzmJsF1MrVTUdmP8AUwtKwzsNTCQASToN5VqGo1+XLs3mcdZnHWBh2qFT2i5TuJYMpRtjGU03ZDygmIS65uY4Yd7G32mF+i3rKSOtYHKbXmufytGuabddZSRxUUlTuJjd0+XRXJQXq2sAuZjKl6mQbLpwqWpUAoOr6mU1z1AOQ3mwA6TEvsg9T2sUxFI2Npcy8oswqrrzg27KMVYEbiAhlDDYzGLdVqcxoeBFxHXKxEU2Iim6g/Z0K5pAi1wYMWpIAUw7gdZyPlPe0H4mVqpqsNLAfKpqWYDrG0NuQFopCK79BGJJJlIBnAPPSYp/5DbZdBMEm7GXAzMdhrGYsxJ3ParU/aIVnub/ALCe5v8AsJSwhVwxa9u3hWuGQ+ohUOrIecta6ncaQTErqG4UGun2ikgg8xPenzXsJ7y5Vh1+ZhFvWHlrwxDZcPb9jwwujEkbAmVDf1JlJctMCV2tSPmbfY0Gy1F/ybGYlctc+YBnOV1uh4YY6keBYId89F4Y02FNfInhSJFCrp+MHxVkXzg2ExR7g9T2lUswHWVaCql1vw9kPY5ydSdIuHAW7taGgjD4GuYQQSDv2QbEcMaLNSPW4h3EYXUw7ygbOPAsJ9OofQcMaf5QOijh8Qwr320tKOuIX1g2HpMV3l9O1hl1LdNBFzNnDCwO0KkMV53tHsHo0+Q1mKY5wOQER2Q3EZixJO57Ii91fQTHd2l6w/jwfRjKXfXwLC/Sb1HDG/WPoOFm91qXNxpaUT/yF9YNhMVuvp2i3sqK23MSu5YBjpzhS9ZGlSp/MWHIx0FZQynWU6IpgsxBjkFmIFgT2RBsPQTHbUR5xt14VO+3rKffHgWE+k/qOGN+r6gcKS3o1Re912ikrXEXb+5iRdFPQ/IzHrwDMNjaFmbdie0guyjqeGNN6tNegJh3HB++3rKffXwLCHRx5cMaPpt1W3DCZcwu2+krIUrkdDaUGuo9JUXMjD7HDLd79IsrNnxDnkNBPyMOxh3Moj4x4FhGtVA6gic5iVvRB6HhSZVIJmNQF1qDZheYV914VkyOeh1H2FFMqDqdY7+zpO/QRdBc7nUxZVNkbhhh8XgVJirqehjd6EZ0deo0hFjFNjDathyLapqJTYowYQEMoIlWnnTzG01B+dQp5212G8AuZjal2WkNhq0boIJiWsoHDDLZSfAhEbPSQ8xoYpsQZiUyVGtsdRwoVmQ7XHSYinkfTZtRMNU/Hny4V6X5r/fzUQu1hEQIoAlRxSpljvyE1JLMdTqYNTfhWbM56CDUymMqgfZn7DCvqUOx4YhM9K/NeAJBiWqoUZtb3Uwgq3QiUqwYa78+FWhuy/58tKbObCU6aoLD/YSqgkmwEq1TWe/IbCHXT/YBaVXyoeFFcz+Q8EUlSDFbOquOe8U2Oux0MxFI0qhHI6g8FNo4FcEr313HUQEg9DKNbkZ6R6Kv5HrHpOnK469sAnYXiYY7t/kVQoAAjOq3udtzKtU1TbZRy6wnpAOFd8zW5DhRTKvmfBcNVytlY6NCLG0qUxWp5PyGqmMCpIIsRwVypuDYx2zm53O/CnXK77RXVtjwalTbcQ4UcmhwrdRPdn6iDCnm0GHQb3MVQBoLQkAamVK4AsIzFjr/AJ2K9TKLDc8KFPMbnYeD4eqKq5T3l2mxmIo+1Uuo+IbjtKxXYxMQRuItam3OZl6zTqJcdRLjrDVQc42JHL/5GqM19ezUcIt4zFiSYiF2AiqFAA8HRijAg2IlOoKq3G43ES9xaYooazFNvkBiNjae1qfsZ7R/2MLsfyPyKtPOvmJ7Ns1rSlTCL5+E03amwZTYiPi3dCoAW+9vtbD/ANK//8QAOhEAAgEDAgQCBwcEAQUBAAAAAQIDAAQRBSESMUFREBMgIjAyUGFxFBVAQlKBkTM0U3IjJENicJCh/9oACAEDAQE/AMVisVisVj/0WzBASTsKjkWTdTn2B+JM6oMk4FG9gzjipJFdcqcjwZlRSSdhV3eRPEyqd6sbpIg3GajlWVcqfjN5M8s3lrUtl5UPGz79qgu3hUgb5pdRmB3G1Ryx3cRHI9aurFYoy4YmrOzE4YlsYqCBYVwDn4wcAUzCK6LHcA5q7uI54cId+1WaIZQZNlFSC0lQj1flVkxS54QdjtUsayoVPI1DAsKkL1+M6jMyBVBxmvslw6h8ZBryZISGkXAqQGXeJNuwoBw2DtVlZmNhI5+nxvUIDIgZRuKtr7ylCOMgVeXX2gjAwBWljdz0xWoFDOAtQA+Smew9nkd/YBHIyFJFEEfAj6POpLGCQ5K4NSafGImCDel+0w8SqCM1bWUkkgeQYFDAHsMgVNdxRDLMBU+sdIxmotSnMy8RGCajbiQH0lHEwHera3jSFF4Ryqawt5BuuDU+jsMmJs1JBJEcOpHwA+wwPSJ8ZriOJSWbGKutWZsrFTyPIcsxJoKWOAM1b2FxIw9TAqFCkYB5+lG3A6tjkQat7yCZRwuM9qBz4SwRSqQ6g1d6Sy5aKmRkJBGD8NJAq8v0gBAOT2qe6lnbLGkjeQ4VcmrbSHfBkNQ2MEOMIM0AB09MUFcbj/8AKh1C6gIw+R2NW2rwyYEg4WpWVgCDkHwu7COdSQMN3q4tpLdirD9/xHFXFWazXF7ckAVf6gIwUQ5NO7SMWY5Jq1sJJyCRgVb2UUAGF3rYUW6AZNYJ5mlQ9BX/ABL78gHyFfa7SP8ALn6mjrFsvKGKm1aBvyIKF7bNQlhbk+KGRup/iuPPvLn51wZ3U5+VW17PbHZsjqpq0v4bkYBw3UHwuLaOdCGFXdm9s5B3XofhJrUL4RLwqdzRLSNk7k1Y6cWw7ikjVBgCiQBW7fIUF27CpLiGEZJyauNX6Kaa8uJOWRQEzdc/Svsk7frr7DN2ejbzLnciuO5QjDmk1GaDhyattVilwHpSrjiRs1kHZufegXjYMpwehFafqYlxHKcN0NDeriBJ4yrCru2a3kKkbdD8IvbpYUO+9SO0rljuTWn2GcO4pVCgAUTilBO5/iiVQZb+KvNUC5VDTST3L8zVvpkj4LbDuai0+BOYyaWKNeSAVgeBVTzGaks4JOaDNT6SDuh/Y1Naywk+qRVtqE0DDJNW17FcqN8Gs8Ox3FEcJBB26GtM1HjxDKd/ynwvbVbiIjG45VLG0blWGCPg0sgRSavJzPKd9hyqwszIwYikQIoAonAoAseI8ulO6xrxN+wq/wBRZyVQ1bWkty1W1lFABtk9/YyRpIuGXIq90wjLR0kkts9WF+twoVjvQPCSDuDRBRgQfmDWm3wnTgc+uPDVrPI81R+FvLsW6jbJNfekv6BX3pL/AIxX3pL/AIxX3rJ+gVaXa3KnbBHtNTuMDgU7moIC7gfzVvCIoxt4e83yFbKCx5CtSvizFFNWdm9xICeXWoYUhQKo9pf2CuC6DfqKj8yCQEd6s7kXEYBPrChuOE/tUMrwSq67EVbzrPEripEDoQeRq8gMEzL05j8Jq3vJUSRCBWKDZQa+2WnCx4BkULq0LIOAb1LDF5TkIORrSf6sns5XCITUrmWVm6CrCD8xHgx/k0q8hWo3QiTANQxPcTDbmat4FgjCjn1PohSTQt5P0mvs8n6TTROo3XHpahacDeYo2POra5MMykGlYOiutNuA381o91wSGFjs3Lw1e3DxiQDcfhNW96OvNia0C8Yzw1gcL770vCGj326080PkMA49ytJ3lk9nqc3BGQOZq3jLFR3qBAkY8Bu30p24Iy3U8qvpjLKQDtWk2wVDIR9PSg2EjDmFOK8+b/I1efN/kaoZHdirMSCp2NNzPoyIsiMp5GrmIwysK0mfjQoTS8yvekYxuGHNTmraUTQo46ipkEkbKeoqaMxyOvY/g7u0Fyo3wRyNHS5QPfFFCGcZ92uE4B70mmTMqnjAyKs7MWwbfJPsjsK1GTjnCZqxjyR4GkHLua1KbgjIHPGKSMSSKAMliBUaCNFUcgMelFIFyCNiMGglt+tq8u2/W1cUMeShJJBG9E7+lqsOyyY+RqymEM64onkw5HcU/MHvvWiTZjeMnkcijWrRcFxxdD+EIBBFfd8OGG+9fd8OU5+rQwBj2cpwhqRi9y5+dWC4QHwflUQ69q1abcDuSa0iMPLxH8oJ9hmsms+neIHt5B2GaDcEimrRzJbIexIo7xg9QcVpcvl3adm28NajyiP2PwK7bhhY/Kod3J7mrRcRDwbmv1r3Ynb5VqTEzgdlFaIvqO3pO4RGY8gM1aXzTSlHAHbHh9pJuvJAGAuWNSagxcpBHxkdaW/lRws8XCD1oEEAjkfRcZVh3GKnyrle1aU3FA4+hpf6bVAxSaNuzCkOVFaovFav8C1A4t3+hq23YfWoBiMeGxcVLtbt9DWof3T1o39sf9vS1ObhjWMHdqlMUXkPE4JX3sUrq0YcHYrmoixhu7jq2QK0tFEBbG5JzU0Ec6hXGwOaVQihRyAwPRNXgxcSfU1o/wDSf/UVH7r/AEobGrc8UMZ7gVejNtJ9DR5/AdT/ALd/pVt74+tQ/wBNfD861KP+BvpWojFy3zANaKcwMOx9IRm7v341PAlS6fB5b8CYbG1RXDrYyoRhl9UfvUEAFosR6rv+9Q3DWDNFKh4Scgiri+ku2SK3Vxk7mo1KxopbJAAJ9E1dninkPzNaQMRP/qKi92Tbp4Wn9tF/qKu/7eT6Gjz+A6mP+mf6Vbn1xUH9NfAn1l+tEAw1qqYkRu4rRH/qJ7DhU9PBlVveUEfMUsaJ7qgfQelMwSJ27Amn9aX61pSkWrt3bApMiJyOuBQ51ajFvEP/ABFXhxbyfQ0efwG+Xit5PoajPCwq0bihHg/I1GcxGtWizET1U1ps3k3KEnY7H8DqUnBblerHFRITKSRVtH5VpCnXGTRBWFd+ZJpBl1HcioxhFHYCtRbhtZPmPgUy8UbD5U4KSMvYkVpUnFCB4GoWIBFX0YdMnkdjTBo5COoNWM4nt0bO42P4DVbkvNheS1p0BllRe5yfoKPrMAPoKm2YKDkAYqxj8y6iX55obCtZfEAXufgRAIrUIzHdP860mbDFfH3WB71IgkRlPUYq8t8FiRuNjWm3Ygl4G2U7GgQRke2v7oW8JwfWOwof8zb1pcHlxGYjBbZagABLtyFNuTWiw5leTsPDWZcyqnYfA9Zg2WQCrSXy5kP7Go2DoD4MM0pyKvYAw4wOmGHcVcRtFKc/UGtKv+MeTIdx7p9rPOkCF3Owq6uXuZSx5dBWn2ZlcL+7GsD1UUbDYCpCEUR43G58NNg8m2TI3O5pmCqT2q7lMs7t3P4McvwF1CJoXU9RToY5Cp5g1ps/HGAfE7HP81sRV7YCRcKPpTrJBJg7MKsNTWQCOU4bofZzzxwIWc/tV7ePcvz26CrW2dmX1cu3uioIFt4+Absd2NRgoPMxv+WnYuxJO5rT7cz3CDGw3NAADArVLgQ25AO7fBdVtSreaoqxk4SDSMHUHxXY4PI9aI5g1e2CTrnkw5GpoJLd8MMGrTVZYcLJ6y1BdwTj1H37emWVRljgVdatFHkR7mpbia5fc5Jq1058BmXLHkDVtbJbL3kPvNSKD6zbAUzEn5dq5mtMtfIgBI9ZtzRIAya1G58+c4Oy7D4LPEJYypFGMwSlenSrWfGxPjih4T2scykFQaudMkjJKbjtWXjbqpFQ6rcx4BbipNc/XFQ1u36o4r76tez0+uRj3Yiak1qYj1VAqW6mlILOTUVlNO2QMDqTVpp0cODjLfqNKAo28GYnHYch4aXZec4kceqKxgVql4Io/LU+sfg97beYuQNxSOynB2Iq2nDAA+kyq2xFTWMUvMA1Lo/MqSKfTJ15EGjY3I/7ZNCxuv8AEaXTrk4yAPqai0d2PrPUOmQx49UE/OljVcbejZ2rXMoXoOZqGJYkVFGAKubhLeJmJqeZppGdjz+DkAiru1/Ogq34y21JnhGefsMDtXlRn8ooIgBwo3rhHb2Gn3f2WXcZU0bqEReZxjGM1fXjXMnZRyHwkgEb0kKISQPwvE2MZ2/+K/8A/9k=",
            image_desc:'Image 1'
        }
    ],
    place_rating: '4.6',
    table_seats:[{
        seat_number: '10',
        seat_category: 'basic',
        seat_status: 'free'
    }]

})
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'surname', 'email', 'date_of_birth', 'password', 'username', 'user_roles', 'activation_status', 'verification_status'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                surname: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                email: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                date_of_birth: {
                    bsonType: 'date',
                    description: 'Must be a date and its required'
                },
                password: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                username: {
                    bsonType: 'string',
                    description: 'Must be a string and its required'
                },
                user_roles: {
                    bsonType: 'array',
                    description: 'Must be a array and its required',
                    items: {
                        bsonType: 'string'
                    }
                },
                activation_status: {
                    bsonType: 'string',
                    description: 'Must be *ACTIVE* OR *INACTIVE* value and its required',
                    enum: ["ACTIVE", "INACTIVE"]
                },
                verification_status: {
                    bsonType: 'string',
                    description: 'Must be a string and its required',
                    enum: ["VERIFIED", "NOT_VERIFIED"]

                },
                user_image:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required:['image'],
                        properties:{
                            image:{
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            },
                            image_desc:{
                                bsonType: 'string',
                                description: 'Must be a string and its required'
                            }
                        }
                    }
                }

            }
        }
    }
})

db.users.insertOne({
    name: 'pera',
    surname: 'peric',
    email: 'pera@gmail.com',
    date_of_birth: new Date("10/10/2010"),
    password: 'pera125',
    username: 'peraa',
    user_roles: ['user'],
    activation_status: 'ACTIVE',
    verification_status: 'VERIFIED'
})

