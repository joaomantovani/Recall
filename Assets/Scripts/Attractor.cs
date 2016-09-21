using UnityEngine;
using System.Collections;

public class Attractor : MonoBehaviour {

	private Transform m_Transform;
	public float m_Radius = 10.0f;
	public float m_Force = 2.0f;

	private void Awake()
	{
		m_Transform = GetComponent<Transform> ();
	}

	private void FixedUpdate () 
	{
		Collider[] hitColliders = Physics.OverlapSphere(m_Transform.position, m_Radius);
		for (int i = 0; i < hitColliders.Length; i++) 
		{
			if (hitColliders[i].CompareTag("PowerUp"))
			{
				Vector3 direction = m_Transform.position - hitColliders[i].transform.position;
				direction.Normalize ();
				hitColliders [i].GetComponent<Rigidbody>().AddForce (direction * m_Force * Time.deltaTime, ForceMode.Impulse);
			}
		}	
	}

	private void OnTriggerEnter(Collider other)
	{
		if (other.CompareTag ("PowerUp")) {
			Destroy (other.gameObject);
		}

	}

	private void OnDrawGizmos() 
	{
		Gizmos.color = new Color(0.0f, 0.0f, 1.0f, 0.25f);
		Gizmos.DrawSphere(transform.position, m_Radius);
	}
}
