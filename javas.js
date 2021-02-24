const var1=document.querySelector('#list1');
const var2=document.querySelector('#list2');
var1.addEventListener('click',service);
var2.addEventListener('click',disorder);
function service(){
    const div1=`<div  class='mt-4' style="margin-left:40px;width:90%">
                <div>
                <h3 class='display-5 text-dark'>
                - Neuropsychological assessments and rehabilitation:

                </h3>
                <p class='text-monospace'><strong>
                Our neuropsychological assessments and rehabilitation services are focused on
providing an all-inclusive plan for the cognitive and neurological issues. A
comprehensive assessment plan targeting each functional area of the brain forms a
strong base for the rehabilitation plan. Our approach is to make primary cognitive
functions - such as sensory registration, recognition, attention, memory - strong and
efficient in order to better cognitive functioning.</strong></p>

                </div>
                <div>
                <h3 class='display-4 text-dark'>
                - Assessment of Personality:
             
                </h3>
                <p class='text-monospace '><strong>
                Personality is that defining feature which governs the way we approach work, love and
life. It defines our thoughts, choices and actions. Assessment of personality helps to
identify traits and qualities that underlie various psychological conditions and personality
disorders. With a thorough understanding of each person’s unique characteristics, we
can help resolve psychological issues.</strong>
</p>

                </div>
                <div>
                <h3 class='display-4 text-dark'>
                - Diagnostic Assessment


                </h3>
                <p class='text-monospace '>
               <strong> Certain behaviours and psychological illnesses may have an indirect and deep-rooted
cause, requiring a careful clinical diagnosis of the problem. The right clinical diagnosis is
critical to the right care plan and treatment. We have an integrated diagnostic
methodology - approaching the problem from different perspectives to reach a clear
diagnosis of psychopathology.</strong>
</p>

                </div>

                
    
    </div>

    
    
    
    `;
    document.querySelector('#mybody').innerHTML=div1;
}

function disorder(){
    const div2=`<div style="margin-left:40px;width:80%">
                <div >
                <h3 class='display-4 ' style="color:green"> 1) Depression</h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 Occasionally being sad or feeling hopeless is a part of every child’s life. However, some
children feel sad or uninterested in things that they used to enjoy, or feel helpless or
hopeless in situations they are not able to change. When children feel persistent
sadness and hopelessness, they may be diagnosed with depression. Some children
may not talk about their helpless and hopeless thoughts, and may not appear sad.
Depression might also cause a child to make trouble or act unmotivated, causing others
not to notice that the child is depressed or to incorrectly label the child as a
trouble-maker or lazy. The first step to treatment is to talk with a healthcare provider or a
Clinical psychologist about getting an evaluation.
</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green"> 2) Anxiety</h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 When children do not outgrow the fears and worries that are typical in young children, or
when there are so many fears and worries that they interfere with school, home or play
activities, the child may be diagnosed with an anxiety disorder.
It could be separation anxiety, having extreme fear of a specific thing or situation; afraid
of school and other places where there are people, being worried about the future and
about bad things happening. It may present as fear or worry, but can also make children
irritable and angry. Anxiety symptoms can also include trouble sleeping, as well as
physical symptoms like fatigue, headaches or stomach-aches. Some anxious children
keep their worries to themselves and, thus, the symptoms can be missed. Hence,
professional help is essential to deal with these problems.

</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green">3) Conduct disorder
                </h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 This is a serious behavioral and emotional disorder that can occur in children and teens.
Many youths with conduct disorder may have trouble feeling and expressing empathy or
remorse and reading social cues. These youth often misinterpret the actions of others
as being hostile or aggressive and respond by escalating the situation into a conflict.
Conduct disorder may also be associated with other difficulties such as substance use,
risk-taking behavior, school problems, etc. Among both boys and girls, conduct disorder
is one of the disorders most frequently diagnosed in mental health settings.
</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green">4) Attention deficit hyperactivity disorder
                </h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 Attention deficit hyperactivity disorder (ADHD) affects children and teens and can
continue into adulthood. ADHD is the most commonly diagnosed mental health disorder
in children. It’s usually discovered during the early school years, when a child begins to
have problems paying attention. Adults with ADHD may have trouble managing time,
being organized, setting goals and holding on to a job. They may also have problems
with relationships, self-esteem and addiction.

</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green"> 5) Autism spectrum disorder
                </h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 Autism is not a single disorder, but a spectrum of closely related disorders with a shared
core of symptoms. Every individual on the autism spectrum has problems with social
interaction, empathy, communication, and flexible behavior. But the level of disability
and the combination of symptoms varies tremendously from person to person. In order
to determine whether your child has an autism spectrum disorder or another
developmental condition, clinicians look carefully at the way your child interacts with
others, communicates and behaves. Diagnosis is based on the patterns of behavior that
are revealed.
</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green"> 6) Developmental delay</h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 It is when your child does not reach their developmental
milestones at the expected times. It is an ongoing major or minor delay in the
process of development. Delay can occur in one or more domains such as gross
or fine motor skills, language, social, or thinking skills. If your child is
developmentally delayed, the sooner you get a diagnosis, the sooner you can
begin connecting with developmental services and formulate a medical plan to
enable the progress.

</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green"> 7) Learning disability</h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 learning disability is not a problem with intelligence or
motivation. In fact, most children with a learning disability are just as smart as
everyone else. Their brains are simply wired differently. This difference affects
how they receive and process information. Most of the kids have trouble with
homework from time to time, if a certain area of learning is consistently
problematic, it might indicate a learning disorder.
Common Learning Disabilities:
<blockquote class='blockquote'><p><cite>Dyslexia- Child</cite> has trouble understanding written words.</p>
<p><cite>Dyscalculia-</cite> Child faces difficulty with regard to understanding and solving arithmetic
and numerical concepts.</p>
<p><cite>Dysgraphia- </cite>Child finds it tough to hold a pencil, to form and write letters.</p>
<p><cite>Dyspraxia-</cite> Difficulties in activities requiring coordination and movement</p>
</p></strong>
                
                </div>

                <div>
                <h3 class='display-4 ' style="color:green"> 8) Intellectual impairment</h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 This refers to a person’s ability to learn, reason,
make decisions and solve problems. Deficiency in intelligence can be a major
reason for poor scholastic performance and it also affects other activities of daily
life such as being able to communicate effectively, interact with others and take
care of oneself. Once an intellectual disability is suspected, a formal evaluation
and assessment needs to be conducted in order to plan a suitable intervention.

                 
</p></strong>
                
                </div>
    
                <div>
                <h3 class='display-4 ' style="color:green">9) Sibling rivalry
                </h3>
                 <strong>   <p class='text-monospace' bg-primary>
                 This is a concern for almost all parents of two or more kids. It
usually continues throughout childhood and can be very frustrating and stressful
for the parents. It includes feelings of hostility, aggression, jealousy between the
siblings stemming from inferiority and a sense of insecurity. If not addressed at
the right age, it can lead to disruption in interpersonal life.</p></strong>
                
                </div>
    
    </div>


    
    
    `;
    document.querySelector('#mybody').innerHTML=div2;
}
